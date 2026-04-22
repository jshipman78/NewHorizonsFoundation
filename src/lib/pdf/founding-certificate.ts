import { jsPDF } from "jspdf";

interface CertificateData {
  fullName: string;
  date: string;
  certificateId: string; // e.g., NHF-FM-0001
}

export function generateFoundingCertificate(data: CertificateData): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "letter", orientation: "landscape" });
  const w = 279.4; // letter landscape width
  const h = 215.9; // letter landscape height
  const cx = w / 2;

  // === BACKGROUND ===
  doc.setFillColor(255, 253, 247); // warm cream
  doc.rect(0, 0, w, h, "F");

  // === OUTER GOLD BORDER ===
  doc.setDrawColor(198, 137, 16); // hope-gold-600
  doc.setLineWidth(2);
  doc.rect(8, 8, w - 16, h - 16);

  // === INNER GOLD BORDER ===
  doc.setDrawColor(232, 167, 48); // hope-gold
  doc.setLineWidth(0.5);
  doc.rect(12, 12, w - 24, h - 24);

  // === CORNER ORNAMENTS ===
  drawCornerOrnaments(doc, w, h);

  // === TOP GOLD RULE ===
  doc.setDrawColor(198, 137, 16);
  doc.setLineWidth(0.8);
  doc.line(40, 32, w - 40, 32);

  // === ORGANIZATION NAME ===
  doc.setTextColor(26, 83, 54); // horizons-green
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("NEW HORIZONS FOUNDATION", cx, 42, { align: "center" });

  // Tagline
  doc.setTextColor(74, 85, 104);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Expanding Access to Mental Health Care", cx, 48, { align: "center" });

  // === CERTIFICATE TITLE ===
  doc.setTextColor(166, 114, 8); // hope-gold-700
  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text("C E R T I F I C A T E   O F", cx, 62, { align: "center" });

  doc.setTextColor(26, 83, 54);
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.text("FOUNDING MEMBERSHIP", cx, 74, { align: "center" });

  // === DECORATIVE DIVIDER ===
  drawDivider(doc, cx, 82);

  // === "This certifies that" ===
  doc.setTextColor(74, 85, 104);
  doc.setFont("times", "italic");
  doc.setFontSize(11);
  doc.text("This certifies that", cx, 92, { align: "center" });

  // === DONOR NAME ===
  doc.setTextColor(26, 83, 54);
  doc.setFont("times", "bold");
  doc.setFontSize(32);
  doc.text(data.fullName, cx, 106, { align: "center" });

  // Name underline
  const nameWidth = Math.max(doc.getTextWidth(data.fullName), 100);
  doc.setDrawColor(232, 167, 48);
  doc.setLineWidth(0.5);
  doc.line(cx - nameWidth / 2 - 5, 109, cx + nameWidth / 2 + 5, 109);

  // === FOUNDING MEMBER SUBTITLE ===
  doc.setTextColor(166, 114, 8);
  doc.setFont("times", "italic");
  doc.setFontSize(14);
  doc.text("Founding Member", cx, 118, { align: "center" });

  // === BODY TEXT ===
  doc.setTextColor(45, 55, 72);
  doc.setFont("times", "normal");
  doc.setFontSize(10);

  const bodyText =
    "is recognized as a Founding Member of the New Horizons Foundation, having demonstrated " +
    "exceptional commitment to expanding access to evidence-based mental health care. Through early and " +
    "decisive support of our mission, this individual stands among the first to invest in a prevention-focused " +
    "mental health initiative serving underserved communities across Texas and Arizona.";

  const bodyLines = doc.splitTextToSize(bodyText, 180);
  doc.text(bodyLines, cx, 128, { align: "center" });

  // === "FIRST 100" LEGACY LINE ===
  const legacyY = 128 + bodyLines.length * 4.5 + 6;
  doc.setTextColor(26, 83, 54);
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text(
    "As one of the First 100, this membership carries permanent recognition in our Founders Circle.",
    cx,
    legacyY,
    { align: "center" }
  );

  // === BOTTOM SECTION ===
  const bottomY = h - 55;

  // Certificate ID - left
  doc.setTextColor(74, 85, 104);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(`Certificate ${data.certificateId}`, 40, bottomY + 22);

  // Date - center
  doc.setFont("times", "normal");
  doc.setFontSize(10);
  doc.setTextColor(45, 55, 72);
  doc.text(data.date, cx, bottomY + 5);

  doc.setDrawColor(74, 85, 104);
  doc.setLineWidth(0.3);
  doc.line(cx - 30, bottomY + 1, cx + 30, bottomY + 1);

  doc.setFontSize(8);
  doc.setTextColor(74, 85, 104);
  doc.text("Date of Issuance", cx, bottomY + 10, { align: "center" });

  // Signature block - right
  doc.setDrawColor(26, 83, 54);
  doc.setLineWidth(0.3);
  doc.line(w - 100, bottomY + 1, w - 40, bottomY + 1);

  doc.setTextColor(26, 83, 54);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Dr. Dean Aslinia, PhD, LPC-S, CSC", w - 70, bottomY + 7, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(74, 85, 104);
  doc.text("Executive Director", w - 70, bottomY + 12, { align: "center" });
  doc.text("New Horizons Foundation", w - 70, bottomY + 17, { align: "center" });

  // === BOTTOM RULE ===
  doc.setDrawColor(198, 137, 16);
  doc.setLineWidth(0.8);
  doc.line(40, h - 28, w - 40, h - 28);

  // === EIN / LEGAL LINE ===
  doc.setTextColor(166, 114, 8);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(
    "New Horizons Mental Health Foundation Inc. | EIN: 41-3658405 | 501(c)(3) Public Charity",
    cx,
    h - 22,
    { align: "center" }
  );

  return doc;
}

function drawCornerOrnaments(doc: jsPDF, w: number, h: number) {
  const size = 8;
  const offset = 14;
  doc.setDrawColor(198, 137, 16);
  doc.setLineWidth(0.5);

  // Top-left
  doc.line(offset, offset + size, offset, offset);
  doc.line(offset, offset, offset + size, offset);

  // Top-right
  doc.line(w - offset - size, offset, w - offset, offset);
  doc.line(w - offset, offset, w - offset, offset + size);

  // Bottom-left
  doc.line(offset, h - offset - size, offset, h - offset);
  doc.line(offset, h - offset, offset + size, h - offset);

  // Bottom-right
  doc.line(w - offset - size, h - offset, w - offset, h - offset);
  doc.line(w - offset, h - offset - size, w - offset, h - offset);
}

function drawDivider(doc: jsPDF, cx: number, y: number) {
  doc.setDrawColor(232, 167, 48);
  doc.setLineWidth(0.3);
  doc.line(cx - 40, y, cx - 8, y);
  doc.line(cx + 8, y, cx + 40, y);

  // Center diamond
  doc.setFillColor(232, 167, 48);
  const d = 2.5;
  doc.line(cx - d, y, cx, y - d);
  doc.line(cx, y - d, cx + d, y);
  doc.line(cx + d, y, cx, y + d);
  doc.line(cx, y + d, cx - d, y);
}
