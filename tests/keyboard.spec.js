import{test,expect} from "@playwright/test";

test("Keyboard actions",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    await page.getByPlaceholder("Paste one version of the text here.").fill("Hi this is playwright automation");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);
})