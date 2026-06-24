import{test,expect} from"@playwright/test";

test("end to end test",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("papul12@gmail.com");
    await page.locator("#Password").fill("Papul@123");
    await page.locator('input[class="button-1 login-button"]').click();
    await page.context().storageState({path:'auth.json'});
})