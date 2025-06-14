const puppeteer = require('puppeteer');
const path = require('path');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'output.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('✅ PDF generated: output.pdf');
})();
