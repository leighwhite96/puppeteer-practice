const puppeteer = require('puppeteer')

let facebookScrape = async() => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https:/facebook.com');
  //login
  await page.click('#email');
  await page.keyboard.type('');
  await page.click('');
  await page.keyboard.type('');
  await page.keyboard.down('Enter');
  //get to friendship
  await page.click('#js_285');
  await page.keyboard.type('');
  await page.click('#js_4z8 > img');
  await page.click('#u_ps_jsonp_6_0_d > i');
  await page.click('#u_ps_jsonp_6_0_0 > div > ul > li:nth-child(1) > a > span > span');

  //see all photos
  await page.click('#js_5hq > div._4iee._2pic._50f4._52jv > a');

  const result =  await page.evaluate(() => {
    let imgArr = [];
    let picContainers = document.querySelectorAll('#BrowseResultsContainer > div');
    for( var pic in picContainers ){
      let imgUrl = pic.childNodes[5].src;
      imgArr.push(imgUrl);
    }
    return imgArr
  })
  console.log(results);
  return results;

}



facebookScrape().then(data => {
  console.log(data);
});
