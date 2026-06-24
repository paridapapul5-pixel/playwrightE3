import{test,expect}from "@playwright/test";

test("modern locators",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    let expectedURL = "https://practicetestautomation.com/logged-in-successfully/";
    await expect(page).toHaveURL(expectedURL);

    let expectedText = "Congratulations student. You successfully logged in!";
    await expect(page.locator(".has-text-align-center.wp-block-paragraph")).toContainText(expectedText);
    await page.waitForTimeout(5000);
})

test("negative user name test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUser");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    let errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();

    let expectedError = "Your username is invalid!";
    await expect(errorMessage).toHaveText(expectedError);
    await page.waitForTimeout(5000);
})

test("negative password test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();

    let errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();

    let expectedError = "Your password is invalid!";
    await expect(errorMessage).toHaveText(expectedError);
    await page.waitForTimeout(5000);
})