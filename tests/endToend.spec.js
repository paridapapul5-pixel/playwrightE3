import {test,expect} from "@playwright/test";

test("launch browser",async({page})=>{
    
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("papul12@gmail.com");
    await page.locator("#Password").fill("Papul@123");
    await page.locator('input[class="button-1 login-button"]').click();

    await page.locator('a[href="/books"]').first().click();
    await page.locator("#products-orderby").selectOption("Price: High to Low");
    await page.locator("#products-pagesize").selectOption("12");
    await page.locator("#products-viewmode").selectOption("List");
    await page.locator(".product-item").filter({hasText:'Health Book'}).getByRole("button",{name :"Add to cart"}).click() ; 
    await page.locator('.cart-qty').click() ; 
    await page.locator('#CountryId').selectOption("India"); 
    await page.getByLabel("Zip / postal code").fill('562125'); 
    await page.locator("#termsofservice").check() ; 
    await page.locator("#checkout").click() ;
    await page.locator("#BillingNewAddress_Company").fill("Qspider");
    await page.locator("#BillingNewAddress_CountryId").selectOption("India");
    await page.locator("#BillingNewAddress_City").fill("Banglore");
    await page.locator("#BillingNewAddress_Address1").fill("Marathahalli");
    await page.locator("#BillingNewAddress_Address2").fill("sarajapur");
    await page.locator("#BillingNewAddress_ZipPostalCode").fill("562125");
    await page.locator("#BillingNewAddress_PhoneNumber").fill("1233456789");
    await page.locator("#BillingNewAddress_FaxNumber").fill("7628731620");
    await page.locator("#billing-buttons-container").click();
    await page.pause();

    await page.waitForTimeout(5000);
})