import{test,expect} from "@playwright/test";

test("handling windows",async({browser})=>{

    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page1.getByPlaceholder("Enter Name").fill("Papul");
    await page1.getByPlaceholder("Enter EMail").fill("papul12@gmail.com");

    await page2.getByPlaceholder("Username").fill("Admin");
    await page2.getByPlaceholder("Password").fill("admin123");
    await page2.getByRole("button",{name:"Login"});

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

})