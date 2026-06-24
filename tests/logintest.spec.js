import{test,expect} from "@playwright/test";

test("positive login test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
})

test("negative user name test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUser");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
})

test("negative password test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();
})