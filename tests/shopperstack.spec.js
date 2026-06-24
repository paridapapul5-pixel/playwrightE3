import{test,expect} from "@playwright/test";
import { appendFile } from "node:fs";

let text = ["puma", "nike"] 

for(text of tex){
    test(`end-to-end login test ${text}`,async({page})=>{

    await page.goto("https://www.shoppersstack.com/");
    await page.locator("#loginBtn").click();
    await page.locator("#Email").fill("papul12@gmail.com");
    await page.locator("#Password").fill("Papul@123");
    await page.locator("#Login").click();

    await  page.locator(".featuredProducts_footerLeft__PmkNa").filter({name :text}).first().click() ; 

    await page.waitForTimeout(10000);
    
})
}
