const {test, expect} =require('@playwright/test');


test('Home Page',async({page})=>{
    await page.goto('https://demoblaze.com/index/html');
    
    const pageTitle=page.title();
    console.log('Page title is: ', pageTitle);
    
    await expect(page).toHaveTitle('STORE');

    const pageURL= page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveUrl('https://www.demoblaze.com/index.html');
    
    await page.close();
    
    await page.goto('https://demoblaze.com/index/html');

    await page.screenshot({path:'HomePage.png', fullPage:true});

    await page.close();

})