const{chromium} = require('playwright');

(async () => 
    {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
    await page.fill ("//input[@name='email']","8056648469");
    await page.click("//a[text()='Privacy Notice']");
    await page.click("//a[@class='a-link-normal'][2]");
   
}
)
(); 

// Types of locators
// Id - tagname#id or #id 
//xpath 
//css
//text 

