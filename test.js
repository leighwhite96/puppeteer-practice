const puppeteer = require('puppeteer')

async function getPic() {
  //await pauses the execution of our function until the async promise resolves.
  //launch launches an instance of chrome (promise) and will wait until we've
  //done this successfull or error out
  const browser = await puppeteer.launch({headless: false});
  //wait for a new page to open and then save it to page variable
  const page = await browser.newPage();
  await page.setViewport({width:1000, height: 500});
  //tell our page to naviagte to a url. Our code will pause until the page has laoded
  await page.goto('https://google.com');
  //screenshot takes an object as a parameter where we can customise the save location
  await page.screenshot({path: 'google.png'});
  //finally when that's done we close our browser
  await browser.close();
}

getPic();
