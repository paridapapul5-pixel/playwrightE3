import{test,expect} from "@playwright/test";

test("simple alert",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog",async dailog=>{
    await dailog.accept();
  })
  await page.locator("#alertBtn").click();
})

test("confirmation alert",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog",async dailog=>{
    await dailog.dismiss();
  })
  await page.locator("#confirmBtn").click();
})

test("prompt alert",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog",async dailog=>{
    await dailog.accept("papul");
  })
   await page.locator("#promptBtn").click();
    
})