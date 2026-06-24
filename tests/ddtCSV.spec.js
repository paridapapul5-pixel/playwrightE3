import{test,expect} from "@playwright/test";
import fs from 'fs'
import {parse} from "csv-parse/sync";

const csvPath="TestData/testData.csv"
const fileContent = fs.readFileSync(csvPath,'utf-8')
const records = parse(fileContent,{
    columns:true,
    skip_empty_lines:true
})

for(let data of records) {
  test(`webshop login test for ${data.email}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(data.email);
    await page.locator("#Password").fill(data.password);
    await page.locator(".login-button").click();
    let logged = await page.getByRole("link" , {name : "Log out"});
    expect(logged).toHaveText("Log out");
  


  })
}

