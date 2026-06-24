//syntax 1
import{test,expect} from "@playwright/test";

//syntax 2
//const{test,expect}=require("@playwright/test");

test("handling child page",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");

const pagePromise= context.waitForEvent('page');  //new tab

await page.locator('button[onclick="myFunction()"]').click();
const childPage=await pagePromise;
await childPage.locator('input[class="gsc-input"]').fill("Papul");
await page.waitForTimeout(5000);
})