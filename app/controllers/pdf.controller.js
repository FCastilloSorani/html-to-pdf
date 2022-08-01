const puppeteer = require('puppeteer');

async function printPDF(html) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();
  return pdf;
}

function getPdf(req, res) {
  const html = req.body;

  if (!html) {
    res.status(400).send({
      message: 'Content can not be empty',
    });
  }

  printPDF(url).then((pdf) => {
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length,
    }),
      res.send(pdf);
  });
}

module.exports.getPdf = getPdf;
