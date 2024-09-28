const { test, expect } = require('@playwright/test')

test('w3c tests', async ({ page }) => {
    await page.goto('/w3c-tests')

    await expect(page.locator('h1')).toHaveText('W3C Tests')

    await expect(page.locator('h1')).toHaveCount(1) 
})  