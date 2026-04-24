import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, type, frequency } = body;

    // Validate amount
    const cents = Math.round(Number(amount) * 100);
    if (!cents || cents < 100) {
      return NextResponse.json(
        { error: "Minimum donation is $1.00" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "https://www.thenewhorizonsfoundation.org";

    // Determine description based on type
    const descriptions: Record<string, string> = {
      "one-time": "One-Time Donation",
      monthly: "Monthly Recurring Gift",
      corporate: "Corporate Sponsorship",
    };
    const description = descriptions[type] || "Donation";

    if (frequency === "monthly") {
      // Create a Stripe Checkout session with a recurring price
      // Note: submit_type is not supported in subscription mode
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              recurring: { interval: "month" },
              product_data: {
                name: "New Horizons Foundation — Monthly Gift",
                description: `$${amount}/month recurring donation to support early-intervention mental health programs.`,
              },
              unit_amount: cents,
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/invest/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/invest/canceled`,
        metadata: {
          type,
          frequency: "monthly",
        },
        subscription_data: {
          metadata: {
            type,
            frequency: "monthly",
          },
        },
        custom_text: {
          submit: {
            message:
              "New Horizons Mental Health Foundation Inc. is a 501(c)(3) public charity (EIN: 41-3658405). Your contribution is tax-deductible to the extent permitted by law.",
          },
        },
      });

      return NextResponse.json({ url: session.url });
    }

    // One-time payment
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `New Horizons Foundation — ${description}`,
              description: `Tax-deductible ${description.toLowerCase()} to support early-intervention mental health programs in your community.`,
            },
            unit_amount: cents,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/invest/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/invest/canceled`,
      submit_type: "donate",
      metadata: {
        type,
        frequency: "one-time",
      },
      payment_intent_data: {
        metadata: {
          type,
          frequency: "one-time",
        },
      },
      custom_text: {
        submit: {
          message:
            "New Horizons Mental Health Foundation Inc. is a 501(c)(3) public charity (EIN: 41-3658405). Your contribution is tax-deductible to the extent permitted by law.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to create checkout session: ${message}` },
      { status: 500 }
    );
  }
}
