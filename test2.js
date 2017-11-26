const puppeteer = require('puppeteer')

async function searchGoogle() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://google.co.uk');

  await page.click('#lst-ib');

  await page.keyboard.type('Hey', {delay: 100});

  await page.keyboard.down('Enter');

  await page.waitFor(5000);

  browser.close();
}

searchGoogle();
