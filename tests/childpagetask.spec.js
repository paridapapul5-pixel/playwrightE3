import{test,expect} from "@playwright/test";

test("handling childpage task",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    
    const text=await page.getByPlaceholder("Username");
    expect(text).toHaveValue("Admin");
    
    await page.getByPlaceholder("Password").fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.screenshot({path:"orangehrm.png"});
    await page.waitForTimeout(5000);
})
test("handling childpage task1",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const pagePromise= context.waitForEvent('page');
    await page.locator('a[href="http://www.orangehrm.com"]').click();
    const childPage=await pagePromise;
    await childPage.locator("#Form_submitForm_EmailHomePage").fill("papul12@gmail.com");
    await childPage.screenshot({fullPage:true ,path:"orangehrmchild.png"});

    await childPage.waitForTimeout(5000);
})