import{test,expect} from"@playwright/test";

test("Rahul setthy login",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("papul12@gmail.com");
    await page.locator("#userPassword").fill("Papul@123");
    await page.locator("#login").click();   

    await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button",{name:" Add To Cart"}).click();
    await page.waitForTimeout(5000);
    

})
