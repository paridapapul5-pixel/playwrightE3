import{test,expect} from "@playwright/test";

test("handling child page 2",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const pagePromise= context.waitForEvent('page');  //new tab

    await page.locator('a[href="http://www.orangehrm.com"]').click();
    const childPage=await pagePromise;
    await childPage.locator('#Form_submitForm_EmailHomePage').fill("papul12@gmail.com");
    await page.waitForTimeout(5000);
})