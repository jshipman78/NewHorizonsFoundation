import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-horizons-green text-white shadow-md hover:bg-horizons-green-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-horizons-green",
  secondary:
    "bg-foundation-blue text-white shadow-md hover:bg-foundation-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-foundation-blue",
  accent:
    "bg-hope-gold text-text-dark shadow-md hover:bg-hope-gold-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-hope-gold",
  outline:
    "border-2 border-horizons-green text-horizons-green hover:bg-horizons-green hover:text-white hover:-translate-y-0.5 focus:ring-horizons-green",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-horizons-green hover:-translate-y-0.5 focus:ring-white",
  ghost:
    "text-foundation-blue hover:bg-foundation-blue-50 hover:text-foundation-blue-700 focus:ring-foundation-blue",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
