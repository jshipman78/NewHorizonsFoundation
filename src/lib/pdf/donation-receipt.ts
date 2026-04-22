import { jsPDF } from "jspdf";

interface ReceiptData {
  donorName: string;
  donorAddress: string;
  donationDate: string;
  amount: string;
  receiptNumber: string;
  paymentMethod?: string;
}

interface NonCashReceiptData {
  donorName: string;
  donorAddress: string;
  donationDate: string;
  description: string;
  estimatedValue: string;
  receiptNumber: string;
}

interface RecurringReceiptData {
  donorName: string;
  donorAddress: string;
  periodStart: string;
  periodEnd: string;
  totalAmount: string;
  numberOfGifts: string;
  receiptNumber: string;
}

const ORG = {
  legalName: "New Horizons Mental Health Foundation Inc.",
  displayName: "New Horizons Foundation",
  ein: "41-3658405",
  address: "4817 Medical Center Dr, Suite 3A, McKinney, TX 75069",
  phone: "(972) 607-9650",
  email: "DrDean@TheNewHorizonsFoundation.org",
  website: "www.thenewhorizonsfoundation.org",
  irsStatus: "501(c)(3) Public Charity",
};

function setupLetterhead(doc: jsPDF): number {
  // Green header bar
  doc.setFillColor(26, 83, 54); // horizons-green
  doc.rect(0, 0, 215.9, 28, "F");

  // Organization name in header
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(ORG.displayName.toUpperCase(), 20, 14);

  // Tagline
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Expanding Access to Mental Health Care", 20, 21);

  // Contact info right-aligned
  doc.setFontSize(8);
  doc.text(ORG.website, 195.9, 10, { align: "right" });
  doc.text(ORG.email, 195.9, 15, { align: "right" });
  doc.text(ORG.phone, 195.9, 20, { align: "right" });

  // Gold accent line
  doc.setDrawColor(232, 167, 48); // hope-gold
  doc.setLineWidth(1.5);
  doc.line(0, 28, 215.9, 28);

  // Address line below header
  doc.setTextColor(74, 85, 104); // text-muted
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(ORG.address, 107.95, 35, { align: "center" });

  return 42; // Y position after letterhead
}

function addFooter(doc: jsPDF) {
  const pageHeight = 279.4;

  // Gold line above footer
  doc.setDrawColor(232, 167, 48);
  doc.setLineWidth(0.5);
  doc.line(20, pageHeight - 25, 195.9, pageHeight - 25);

  doc.setTextColor(74, 85, 104);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${ORG.legalName} | EIN: ${ORG.ein} | ${ORG.irsStatus}`,
    107.95,
    pageHeight - 18,
    { align: "center" }
  );
  doc.text(
    "This receipt is provided for your tax records. Please retain for your files.",
    107.95,
    pageHeight - 13,
    { align: "center" }
  );
}

function addLegalDisclaimer(doc: jsPDF, y: number): number {
  doc.setFillColor(247, 250, 252); // bg-light
  doc.roundedRect(20, y, 175.9, 28, 2, 2, "F");

  doc.setTextColor(45, 55, 72); // text-body
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("Tax Deductibility Statement", 25, y + 6);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  const disclaimer =
    `${ORG.legalName} is a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code ` +
    `(EIN: ${ORG.ein}). No goods or services were provided in exchange for this contribution. ` +
    `This donation is tax-deductible to the fullest extent permitted by law.`;

  const lines = doc.splitTextToSize(disclaimer, 165);
  doc.text(lines, 25, y + 12);

  return y + 34;
}

function addSignatureBlock(doc: jsPDF, y: number): number {
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("With gratitude,", 20, y);

  // Signature line
  doc.setDrawColor(26, 83, 54);
  doc.setLineWidth(0.3);
  doc.line(20, y + 18, 80, y + 18);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Dr. Dean Aslinia, PhD, LPC-S, CSC", 20, y + 23);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Executive Director", 20, y + 28);
  doc.text(ORG.displayName, 20, y + 33);

  return y + 40;
}

export function generateDonationReceipt(data: ReceiptData): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  let y = setupLetterhead(doc);

  // Title
  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("DONATION RECEIPT", 107.95, y + 5, { align: "center" });

  // Receipt number
  doc.setTextColor(74, 85, 104);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Receipt No. ${data.receiptNumber}`, 107.95, y + 12, { align: "center" });

  y += 22;

  // Date
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.text(`Date: ${data.donationDate}`, 20, y);
  y += 10;

  // Donor info
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Received From:", 20, y);
  doc.setFont("helvetica", "normal");
  doc.text(data.donorName, 55, y);
  y += 6;
  const addressLines = doc.splitTextToSize(data.donorAddress, 140);
  doc.text(addressLines, 55, y);
  y += addressLines.length * 5 + 8;

  // Donation details box
  doc.setFillColor(255, 248, 225); // hope-gold-50
  doc.setDrawColor(232, 167, 48);
  doc.setLineWidth(0.3);
  doc.roundedRect(20, y, 175.9, 24, 2, 2, "FD");

  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Donation Amount", 30, y + 9);

  doc.setFontSize(22);
  doc.text(`$${data.amount}`, 30, y + 19);

  if (data.paymentMethod) {
    doc.setTextColor(45, 55, 72);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`Payment Method: ${data.paymentMethod}`, 120, y + 14);
  }

  y += 34;

  // Thank you message
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const thankYou =
    "Thank you for your generous contribution to the New Horizons Foundation. " +
    "Your support helps expand access to evidence-based mental health care for underserved communities.";
  const thankLines = doc.splitTextToSize(thankYou, 175.9);
  doc.text(thankLines, 20, y);
  y += thankLines.length * 5 + 10;

  // Legal disclaimer
  y = addLegalDisclaimer(doc, y);
  y += 8;

  // Signature
  addSignatureBlock(doc, y);

  // Footer
  addFooter(doc);

  return doc;
}

export function generateNonCashReceipt(data: NonCashReceiptData): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  let y = setupLetterhead(doc);

  // Title
  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("NON-CASH DONATION RECEIPT", 107.95, y + 5, { align: "center" });

  doc.setTextColor(74, 85, 104);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Receipt No. ${data.receiptNumber}`, 107.95, y + 12, { align: "center" });

  y += 22;

  // Date
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.text(`Date: ${data.donationDate}`, 20, y);
  y += 10;

  // Donor info
  doc.setFont("helvetica", "bold");
  doc.text("Received From:", 20, y);
  doc.setFont("helvetica", "normal");
  doc.text(data.donorName, 55, y);
  y += 6;
  const addressLines = doc.splitTextToSize(data.donorAddress, 140);
  doc.text(addressLines, 55, y);
  y += addressLines.length * 5 + 8;

  // Property description box
  doc.setFillColor(247, 250, 252);
  doc.setDrawColor(26, 83, 54);
  doc.setLineWidth(0.3);
  doc.roundedRect(20, y, 175.9, 30, 2, 2, "FD");

  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Description of Property Donated", 25, y + 7);

  doc.setTextColor(45, 55, 72);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const descLines = doc.splitTextToSize(data.description, 165);
  doc.text(descLines, 25, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("Donor's Estimated Value:", 25, y + 25);
  doc.setFont("helvetica", "normal");
  doc.text(`$${data.estimatedValue}`, 80, y + 25);

  y += 40;

  // IRS notice
  doc.setTextColor(74, 85, 104);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  const irsNotice =
    "Note: The donor is responsible for determining the fair market value of non-cash contributions. " +
    "For donations exceeding $5,000 in value, a qualified independent appraisal may be required (IRS Form 8283). " +
    "This organization did not provide a determination of value for the donated property.";
  const irsLines = doc.splitTextToSize(irsNotice, 175.9);
  doc.text(irsLines, 20, y);
  y += irsLines.length * 4 + 10;

  // Thank you
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const thankYou =
    "Thank you for your generous in-kind contribution to the New Horizons Foundation. " +
    "Your support helps expand access to evidence-based mental health care.";
  const thankLines = doc.splitTextToSize(thankYou, 175.9);
  doc.text(thankLines, 20, y);
  y += thankLines.length * 5 + 10;

  y = addLegalDisclaimer(doc, y);
  y += 8;
  addSignatureBlock(doc, y);
  addFooter(doc);

  return doc;
}

export function generateRecurringReceipt(data: RecurringReceiptData): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  let y = setupLetterhead(doc);

  // Title
  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("RECURRING DONATION RECEIPT", 107.95, y + 5, { align: "center" });

  doc.setTextColor(74, 85, 104);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Receipt No. ${data.receiptNumber}`, 107.95, y + 12, { align: "center" });

  y += 22;

  // Date & period
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.text(`Period: ${data.periodStart} — ${data.periodEnd}`, 20, y);
  y += 10;

  // Donor info
  doc.setFont("helvetica", "bold");
  doc.text("Received From:", 20, y);
  doc.setFont("helvetica", "normal");
  doc.text(data.donorName, 55, y);
  y += 6;
  const addressLines = doc.splitTextToSize(data.donorAddress, 140);
  doc.text(addressLines, 55, y);
  y += addressLines.length * 5 + 8;

  // Recurring summary box
  doc.setFillColor(255, 248, 225); // hope-gold-50
  doc.setDrawColor(232, 167, 48);
  doc.setLineWidth(0.3);
  doc.roundedRect(20, y, 175.9, 28, 2, 2, "FD");

  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Recurring Gift Summary", 30, y + 9);

  doc.setFontSize(22);
  doc.text(`$${data.totalAmount}`, 30, y + 21);

  doc.setTextColor(45, 55, 72);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Total from ${data.numberOfGifts} contributions`, 120, y + 14);
  doc.text(`${data.periodStart} — ${data.periodEnd}`, 120, y + 20);

  y += 38;

  // Thank you
  doc.setTextColor(45, 55, 72);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const thankYou =
    "Thank you for your sustained commitment to the New Horizons Foundation. " +
    "Your recurring generosity provides the reliable support we need to expand mental health services to underserved communities.";
  const thankLines = doc.splitTextToSize(thankYou, 175.9);
  doc.text(thankLines, 20, y);
  y += thankLines.length * 5 + 10;

  y = addLegalDisclaimer(doc, y);
  y += 8;
  addSignatureBlock(doc, y);
  addFooter(doc);

  return doc;
}
