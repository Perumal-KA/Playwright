const{ chromium } = require('playwright/test');

(async () => 
    {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://ui.vision/demo/webtest/frames/");
      
    const frame = await page.frameLocator("//frame[@src='frame_1.html']");
    await frame.locator("//input[@name='mytext1']").fill("podadeii");

    
}
)
(); 