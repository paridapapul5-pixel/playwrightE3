import{test,expect} from "@playwright/test";

//gift card,book,computer,smartphones
let items=['gift card','book','computer','smartphone']

for(let item of items){
    test(`webshop test ${item}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.getByRole("button",{name:"Search"}).click();
    await page.waitForTimeout(5000);
})
}