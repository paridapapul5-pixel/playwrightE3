import{test,eexpect} from"@playwright/test";

test("upload file",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').setInputFiles("playwright notes .pdf");

    await page.waitForTimeout(10000);

})

test("upload  multiple file",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#multipleFilesInput').setInputFiles(["playwright notes .pdf","resume.pdf"]);

    await page.waitForTimeout(10000);

})
