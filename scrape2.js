const puppeteer = require('puppeteer');

let scrape2 = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');
  await page.waitFor(1000);

  const result = await page.evaluate(() => {
    let arr = [];
    let books = document.querySelectorAll('.product_pod');

    for(var book of books) {
      let title = book.childNodes[5].innerText;
      let price = book.childNodes[7].children[0].innerText;
      arr.push({title,price});
    }
    return arr;
  })
  browser.close();
  return result;
};

scrape2().then((value) => {
  console.log(value);
})
