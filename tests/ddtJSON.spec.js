import{test,expect} from "@playwright/test";
import fs from 'fs'


const jsonpath = "TestData/testData.json"

const loginData=JSON.parse(fs.readFileSync(jsonpath,'utf-8'))

for(let {email , password} of loginData) {
  test(`webshop login test for ${email}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);
    await page.locator(".login-button").click();
    let logged = await page.getByRole("link" , {name : "Log out"});
    expect(logged).toHaveText("Log out");
  


  })
}