import{test,expect} from "@playwright/test";

import {login} from "./login"
import{cartPage} from "./cartPage"

test("pom test framework",async({page})=>{
    const newLogin =new login(page);
    await newLogin.gotoPage();
    await newLogin.loginPage('papul12@gmail.com','Papul@123');

    const cart =new cartPage(page);
    await cart.addproducttocart('Health Book');
    await page.waitForTimeout(5000);

})