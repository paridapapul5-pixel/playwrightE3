import{test,expect} from "@playwright/test";

test("alerts with okk",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.accept();
    })
    await page.locator('a[href="#OKTab"]').click();
    await page.locator('button[class="btn btn-danger"]').click();

})

test("alerts with okk cancel",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.dismiss();
    })
    await page.locator('a[href="#CancelTab"]').click();
    await page.locator('button[class="btn btn-primary"]').click();

})

test("alerts with textbox",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.accept();
    })
    await page.locator('a[href="#Textbox"]').click();
    await page.locator('button[class="btn btn-info"]').click();

    await page.waitForTimeout(5000);

    

})

