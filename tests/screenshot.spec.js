import{test,expect} from "@playwright/test";

//type-1  only visible part will take screenshot.
test("screenshot 1",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({path:"page.png"});
})

//type-2  entire page  will take screenshot.
test("screenshot 2",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({fullPage:true ,path:"page1.png"});
})

//type-3  only particular part  will take screenshot.
test("screenshot 3",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('img[alt="Tricentis Demo Web Shop"]').screenshot({path:"page2.png"});

})