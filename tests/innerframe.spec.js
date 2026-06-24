import{test,expect} from "@playwright/test";

test("innner frames",async({page})=>{
    await page.goto("https://ui.vision/demo/iframes");
    const inner=await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"});
     
    await inner.locator(".Id5V1").nth(1).click();
    await inner.locator(".fsHoPb").nth(2).click();
    await page.waitForTimeout(5000);

})