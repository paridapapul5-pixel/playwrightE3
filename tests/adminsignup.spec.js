import{test,expect} from "@playwright/test";

test("admin signup",async({page})=>{
    await page.goto("https://www.shoppersstack.com/admin-signup");
    await page.locator('input[id="First Name"]').fill("Papul");
    await page.locator('input[id="Last Name"]').fill("parida");
    await page.locator('#Male').click();
    await page.locator('input[id="Phone Number"]').fill("1234567890");
    await page.locator('input[id="Email Address"]').fill("papul12@gmail.com");
    await page.locator('input[id="Password"]').fill("Papul@123");
    await page.locator('input[id="Confirm Password"]').fill("Papul@123");
    await page.locator('select[id="Country"]').selectOption("India");
    await page.locator('select[id="State"]').selectOption("Karnataka");
    await page.locator('select[id="City"]').selectOption("Bengaluru");
    await page.getByRole("button",{name:"Register"}).click();
  
  

    await page.waitForTimeout(5000);
})

