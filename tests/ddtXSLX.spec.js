/*import{test,expect} from "@playwright/test";
import fs from 'fs';
import * as XLSX from "xlsx";

const xlsxFilePath="TestData/testData.xlsx";
const content = XLSX.readFile(xlsxFilePath);
const sheet = content.SheetNames[0];
const worksheet = content.Sheets[sheet]

const loginData= XLSX.utils.sheet_to_json(worksheet);

for(let {email , password} of loginData) {
  test(`webshop login test for ${email}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);
    await page.locator(".login-button").click();
    let logged = await page.getByRole("link" , {name :"Log out"});
    expect(logged).toHaveText("Log out");
  


  })
}*/

import { test, expect } from "@playwright/test";
import * as XLSX from "xlsx";

// Excel file path
const xlsxFilepath = "testData/testData.xlsx";

// Read workbook
const workbook = XLSX.readFileSync(xlsxFilepath);

// Get first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert sheet data to JSON
const loginData = XLSX.utils.sheet_to_json(worksheet);

// Print data to verify
console.log(loginData);

for (const data of loginData) {
  test(`WebShop Login Test - ${data.email}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator(".ico-login").click();

    await page.locator("#Email").fill(String(data.email));

    await page.locator("#Password").fill(String(data.password));

    await page.locator(".login-button").click();
  });
}
