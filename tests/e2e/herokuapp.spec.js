const { test, expect } = require('@playwright/test') 
const TestHelper = require('../utils/test-helper') 

test.describe('The Internet Herokuapp Tests', () => {
    test('Login Test', async ({ page }) => {
        await page.goto('/login') 
        
        await page.fill('#username', 'tomsmith') 
        await page.fill('#password', 'SuperSecretPassword!') 
        await page.click('button[type="submit"]') 
        
        await expect(page.locator('.flash.success')).toBeVisible() 
        await expect(page.locator('.flash.success')).toContainText('You logged in successfully!') 
    }) 

    test('Dynamic Loading Test', async ({ page }) => {
        await page.goto('/dynamic_loading/1') 
        
        await page.click('button') 
        await expect(page.locator('#loading')).toBeVisible() 
        await expect(page.locator('#finish h4')).toBeVisible() 
        await expect(page.locator('#finish h4')).toHaveText('Hello World!') 
    }) 

    test('Drag and Drop Test', async ({ page }) => {
        await page.goto('/drag_and_drop') 
        
        const sourceElement = await page.locator('#column-a') 
        const targetElement = await page.locator('#column-b') 
        
        await sourceElement.dragTo(targetElement) 
        
        await expect(page.locator('#column-a header')).toHaveText('B') 
        await expect(page.locator('#column-b header')).toHaveText('A') 
    }) 

    test('Dynamic Controls Test', async ({ page }) => {
        await page.goto('/dynamic_controls') 
        
        // Test the checkbox
        await page.click('button:has-text("Remove")') 
        await expect(page.locator('#checkbox')).not.toBeVisible() 
        
        await page.click('button:has-text("Add")') 
        await expect(page.locator('#checkbox')).toBeVisible() 
        
        // Test the input field
        await page.click('button:has-text("Enable")') 
        await expect(page.locator('input[type="text"]')).toBeEnabled() 
        
        await page.click('button:has-text("Disable")') 
        await expect(page.locator('input[type="text"]')).toBeDisabled() 
    }) 
}) 
