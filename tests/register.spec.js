import{test,expect} from "@playwright/test";

test("register @ demo webshop",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-register").click();
    await page.locator("#gender-male").check();
    await page.locator("#FirstName").fill("Mrutyunjaya");
    await page.locator("#LastName").fill("Parida");
    await page.locator("#Email").fill("papul12@gmail.com");
    await page.locator("#Password").fill("Papul@123");
    await page.locator("#ConfirmPassword").fill("Papul@123");
    await page.waitForTimeout(5000);
    await page.locator("#register-button").click();


})