#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, 'output');

if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

const data = JSON.parse(readFileSync(join(__dirname, 'invoice-data.json'), 'utf-8'));
const logoB64 = readFileSync(join(__dirname, 'logo.b64'), 'utf-8').trim();

function formatCurrency(n) {
  return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function generateHTML(inv) {
  const hasHours = inv.lineItems.some(i => i.hours != null);
  const hasRecurring = inv.recurringCharges && inv.recurringCharges.length > 0;

  const lineItemRows = inv.lineItems.map((item, i) => `
    <tr class="${i % 2 === 0 ? 'row-even' : 'row-odd'}">
      <td class="row-num">${String(i + 1).padStart(2, '0')}</td>
      <td class="desc">${item.description}</td>
      ${hasHours ? `<td class="num">${item.hours != null ? item.hours.toFixed(1) : '\u2014'}</td>` : ''}
      ${hasHours ? `<td class="num">${item.rate != null ? formatCurrency(item.rate) : '\u2014'}</td>` : ''}
      <td class="num amount-col">${formatCurrency(item.amount)}</td>
    </tr>`).join('\n');

  const recurringRows = hasRecurring ? inv.recurringCharges.map((item, i) => `
    <tr class="${i % 2 === 0 ? 'row-even' : 'row-odd'}">
      <td class="desc">${item.description}</td>
      <td class="num">${item.frequency}</td>
      <td class="num amount-col">${formatCurrency(item.amount)}</td>
    </tr>`).join('\n') : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice ${inv.invoiceNumber}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');

  :root {
    --brand-deep: #6B1A1A;
    --brand-red: #8B2525;
    --brand-light: #A83232;
    --charcoal: #2D2D2D;
    --slate: #4A4A4A;
    --steel: #6B7280;
    --silver: #9CA3AF;
    --ash: #D1D5DB;
    --pearl: #F3F4F6;
    --snow: #F9FAFB;
    --white: #FFFFFF;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  @page {
    size: letter;
    margin: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--charcoal);
    background: var(--white);
    font-size: 12.5px;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 816px;
    margin: 0 auto;
  }

  /* ===== TOP ACCENT BAR ===== */
  .accent-bar {
    height: 6px;
    background: linear-gradient(90deg, var(--brand-deep) 0%, var(--brand-red) 40%, var(--brand-light) 100%);
  }

  /* ===== HEADER ===== */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 56px 28px;
  }

  .logo img {
    height: 52px;
    width: auto;
  }

  .invoice-badge {
    text-align: right;
  }

  .invoice-badge h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 38px;
    font-weight: 700;
    color: var(--brand-red);
    letter-spacing: -1px;
    line-height: 1;
  }

  .invoice-badge .inv-id {
    font-size: 12px;
    font-weight: 600;
    color: var(--steel);
    letter-spacing: 1px;
    margin-top: 6px;
  }

  /* ===== DIVIDER ===== */
  .divider {
    margin: 0 56px;
    border: none;
    height: 1px;
    background: var(--ash);
  }

  .divider-bold {
    height: 2px;
    background: linear-gradient(90deg, var(--brand-red), var(--ash) 60%);
  }

  /* ===== META SECTION ===== */
  .meta {
    display: flex;
    justify-content: space-between;
    padding: 28px 56px 24px;
    gap: 40px;
  }

  .meta-col h3 {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--brand-red);
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid var(--pearl);
  }

  .meta-col p {
    font-size: 12.5px;
    line-height: 1.7;
    color: var(--slate);
  }

  .meta-col .primary {
    font-weight: 600;
    color: var(--charcoal);
    font-size: 14px;
  }

  .meta-right {
    text-align: right;
    min-width: 200px;
  }

  .meta-right .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 5px 0;
    border-bottom: 1px solid var(--pearl);
  }

  .meta-right .detail-row:last-child {
    border-bottom: none;
  }

  .meta-right .detail-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--silver);
    margin-right: 20px;
  }

  .meta-right .detail-value {
    font-size: 13px;
    font-weight: 500;
    color: var(--charcoal);
    font-variant-numeric: tabular-nums;
  }

  .meta-right .detail-value.highlight {
    color: var(--brand-red);
    font-weight: 700;
  }

  /* ===== TABLE ===== */
  .table-wrap {
    padding: 0 56px;
    margin-bottom: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead th {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--white);
    background: var(--brand-red);
    padding: 11px 14px;
    text-align: left;
  }

  thead th:first-child {
    border-radius: 4px 0 0 0;
    padding-left: 16px;
  }

  thead th:last-child {
    border-radius: 0 4px 0 0;
  }

  thead th.num {
    text-align: right;
  }

  tbody td {
    padding: 12px 14px;
    vertical-align: top;
    border-bottom: 1px solid var(--pearl);
  }

  .row-even { background: var(--white); }
  .row-odd  { background: var(--snow); }

  td.row-num {
    width: 36px;
    font-size: 10px;
    font-weight: 700;
    color: var(--silver);
    text-align: center;
    padding-left: 16px;
  }

  td.desc {
    font-size: 12px;
    color: var(--slate);
    line-height: 1.6;
    max-width: 340px;
  }

  td.num {
    text-align: right;
    font-size: 12.5px;
    font-variant-numeric: tabular-nums;
    color: var(--slate);
    white-space: nowrap;
  }

  td.amount-col {
    font-weight: 600;
    color: var(--charcoal);
  }

  tbody tr:last-child td {
    border-bottom: 2px solid var(--brand-red);
  }

  /* ===== RECURRING ===== */
  .recurring-section {
    padding: 16px 56px 0;
    margin-bottom: 4px;
  }

  .recurring-section .section-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--steel);
    margin-bottom: 8px;
  }

  .recurring-section table thead th {
    background: var(--slate);
  }

  /* ===== TOTALS ===== */
  .totals-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 20px 56px 16px;
  }

  .totals-box {
    width: 300px;
    border: 1px solid var(--pearl);
    border-radius: 6px;
    overflow: hidden;
  }

  .totals-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 12.5px;
    color: var(--slate);
    border-bottom: 1px solid var(--pearl);
  }

  .totals-line:last-of-type:not(.total-final) {
    border-bottom: 1px solid var(--pearl);
  }

  .totals-line .t-label {
    font-weight: 500;
  }

  .totals-line .t-amount {
    font-variant-numeric: tabular-nums;
    font-weight: 600;
  }

  .total-final {
    background: var(--brand-red);
    color: var(--white);
    padding: 14px 20px;
    border-bottom: none;
  }

  .total-final .t-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .total-final .t-amount {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  /* ===== NOTES ===== */
  .notes-wrap {
    padding: 0 56px;
    margin-bottom: 20px;
  }

  .notes {
    background: var(--snow);
    border: 1px solid var(--pearl);
    border-left: 3px solid var(--brand-red);
    border-radius: 0 6px 6px 0;
    padding: 16px 20px;
  }

  .notes h3 {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--brand-red);
    margin-bottom: 6px;
  }

  .notes p {
    font-size: 11.5px;
    color: var(--steel);
    line-height: 1.7;
  }

  /* ===== FOOTER ===== */
  .footer {
    background: var(--charcoal);
    padding: 20px 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg, var(--brand-light) 0%, var(--brand-red) 40%, var(--brand-deep) 100%) 1;
  }

  .footer-left p {
    font-size: 10.5px;
    color: rgba(255,255,255,0.55);
    line-height: 1.7;
  }

  .footer-left .biz-name {
    font-weight: 700;
    color: rgba(255,255,255,0.85);
    font-size: 12px;
  }

  .footer-right {
    text-align: right;
  }

  .footer-right .due-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 4px;
  }

  .footer-right .due-date {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
  }

  .due-pill {
    display: inline-block;
    background: var(--brand-red);
    color: var(--white);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 14px;
    border-radius: 20px;
    margin-top: 6px;
  }

  /* ===== WATERMARK ===== */
  .watermark {
    position: fixed;
    top: 380px;
    right: -60px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 220px;
    font-weight: 700;
    color: rgba(139, 37, 37, 0.03);
    transform: rotate(-90deg);
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    letter-spacing: -5px;
    z-index: -1;
  }

  /* ===== PAGE BREAKS ===== */
  .table-wrap, .recurring-section, .totals-wrap, .notes-wrap {
    page-break-inside: avoid;
  }

  tr {
    page-break-inside: avoid;
  }

  @media print {
    body { background: var(--white); }
  }
</style>
</head>
<body>
<div class="page">

  <!-- WATERMARK -->
  <div class="watermark">INVOICE</div>

  <!-- TOP ACCENT BAR -->
  <div class="accent-bar"></div>

  <!-- HEADER -->
  <div class="header">
    <div class="logo">
      <img src="data:image/png;base64,${logoB64}" alt="Luminous Productions" />
    </div>
    <div class="invoice-badge">
      <h2>Invoice</h2>
      <div class="inv-id">${inv.invoiceNumber}</div>
    </div>
  </div>

  <hr class="divider divider-bold" />

  <!-- META -->
  <div class="meta">
    <div class="meta-col">
      <h3>Bill To</h3>
      ${inv.client.company ? `<p class="primary">${inv.client.company}</p>` : ''}
      ${inv.client.name && inv.client.name !== inv.client.company ? `<p>${inv.client.name}</p>` : ''}
      ${inv.client.address ? `<p>${inv.client.address}</p>` : ''}
      ${inv.client.cityStateZip ? `<p>${inv.client.cityStateZip}</p>` : ''}
      ${inv.client.email ? `<p>${inv.client.email}</p>` : ''}
    </div>
    <div class="meta-col">
      <h3>From</h3>
      <p class="primary">Luminous Productions</p>
      <p>Joe Shipman</p>
      <p>2913 Charity Rd.</p>
      <p>Commerce, TX</p>
      <p>Joe@luminouspro.com</p>
    </div>
    <div class="meta-col meta-right">
      <h3>Details</h3>
      <div class="detail-row">
        <span class="detail-label">Invoice Date</span>
        <span class="detail-value">${inv.date}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Due Date</span>
        <span class="detail-value highlight">${inv.dueDate}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Terms</span>
        <span class="detail-value">${inv.paymentTerms || 'Net 30'}</span>
      </div>
    </div>
  </div>

  <!-- LINE ITEMS -->
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th style="width:36px">#</th>
          <th>Description</th>
          ${hasHours ? '<th class="num" style="width:65px">Hours</th>' : ''}
          ${hasHours ? '<th class="num" style="width:75px">Rate</th>' : ''}
          <th class="num" style="width:95px">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${lineItemRows}
      </tbody>
    </table>
  </div>

  ${hasRecurring ? `
  <!-- RECURRING CHARGES -->
  <div class="recurring-section">
    <div class="section-label">Recurring Charges</div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th class="num" style="width:100px">Frequency</th>
          <th class="num" style="width:95px">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${recurringRows}
      </tbody>
    </table>
  </div>
  ` : ''}

  <!-- TOTALS -->
  <div class="totals-wrap">
    <div class="totals-box">
      <div class="totals-line">
        <span class="t-label">Subtotal</span>
        <span class="t-amount">${formatCurrency(inv.subtotal)}</span>
      </div>
      ${hasRecurring ? `
      <div class="totals-line">
        <span class="t-label">Recurring (this period)</span>
        <span class="t-amount">${formatCurrency(inv.recurringTotal)}</span>
      </div>
      ` : ''}
      <div class="totals-line total-final">
        <span class="t-label">Total Due</span>
        <span class="t-amount">${formatCurrency(inv.total)}</span>
      </div>
    </div>
  </div>

  ${inv.notes ? `
  <!-- NOTES -->
  <div class="notes-wrap">
    <div class="notes">
      <h3>Notes &amp; Deliverables</h3>
      <p>${inv.notes}</p>
    </div>
  </div>
  ` : ''}

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-left">
      <p class="biz-name">Luminous Productions</p>
      <p>Joe Shipman &middot; (903) 851-3183 &middot; Joe@luminouspro.com</p>
      <p>2913 Charity Rd., Commerce, TX</p>
    </div>
    <div class="footer-right">
      <div class="due-label">Payment Due</div>
      <div class="due-date">${inv.dueDate}</div>
      <div class="due-pill">${inv.paymentTerms || 'Net 30'}</div>
    </div>
  </div>

</div>
</body>
</html>`;
}

// Generate HTML
const html = generateHTML(data);
const htmlPath = join(outputDir, `invoice-${data.invoiceNumber}.html`);
writeFileSync(htmlPath, html);
console.log(`HTML invoice: ${htmlPath}`);

// Try PDF generation via puppeteer
async function generatePDF() {
  try {
    const puppeteer = await import('puppeteer');
    const browser = await puppeteer.default.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfPath = join(outputDir, `invoice-${data.invoiceNumber}.pdf`);
    await page.pdf({
      path: pdfPath,
      width: '816px',
      height: '1056px',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      preferCSSPageSize: true
    });
    await browser.close();
    console.log(`PDF invoice:  ${pdfPath}`);
    return true;
  } catch {
    return false;
  }
}

// Try Chrome headless as fallback
async function generatePDFChrome() {
  const { execSync } = await import('child_process');
  const pdfPath = join(outputDir, `invoice-${data.invoiceNumber}.pdf`);
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    'google-chrome',
    'chromium',
  ];
  for (const chrome of chromePaths) {
    try {
      execSync(`"${chrome}" --headless --disable-gpu --no-sandbox --print-to-pdf="${pdfPath}" "${htmlPath}"`, {
        stdio: 'pipe',
        timeout: 15000,
      });
      console.log(`PDF invoice:  ${pdfPath}`);
      return true;
    } catch { continue; }
  }
  return false;
}

const pdfOk = await generatePDF() || await generatePDFChrome();

if (!pdfOk) {
  console.log('\nPDF generation requires puppeteer or Chrome.');
  console.log('Install puppeteer:  npm install --save-dev puppeteer');
  console.log('Or open the HTML file in a browser and print to PDF.');
  console.log(`\nOpen with:  open "${htmlPath}"`);
}
