import{test,expect} from "@playwright/test";

test("drag and drop",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     await page.dragAndDrop("#draggable","#droppable"); 

     await page.waitForTimeout(10000);
})

test("drag and drop 2",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     const item=await page.locator("#draggable");
     const target=await page.locator("#droppable");

     await item.dragTo(target);

     await page.waitForTimeout(10000);
})

test("drag and drop 3 by using mouse",async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     const item=await page.locator("#draggable");
     const target=await page.locator("#droppable");

     await item.hover();
     await page.mouse.down();

     await target.hover();
     await page.mouse.up();

     await page.waitForTimeout(10000);
})

