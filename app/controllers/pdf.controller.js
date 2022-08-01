const puppeteer = require('puppeteer');

function genPdf(req, res) {
  const html = req.body;
  const url = req.body.url;

  if (!html && !url) {
    res.status(400).send({
      message: 'Content can not be empty',
    });
    return;
  }

  if (url) {
    genPdfFromUrl(url).then((pdf) => {
      res.set(headers(pdf));
      res.send(pdf);
    });
    return;
  }

  genPdfFromHtml(html).then((pdf) => {
    res.set(headers(pdf));
    res.send(pdf);
  });
}

function headers(pdf) {
  return {
    'Content-Type': 'application/pdf',
    'Content-Length': pdf.length,
  };
}

async function genPdfFromUrl(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  return pdf;
}

async function genPdfFromHtml(html) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  return pdf;
}

module.exports.getPdf = getPdf;
