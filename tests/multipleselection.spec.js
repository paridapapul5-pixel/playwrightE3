import{test,expect} from "@playwright/test";

test("select multiple options",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.selectOption("#colors",['Red','Green','Yellow']);
    await page.waitForTimeout(10000);
})