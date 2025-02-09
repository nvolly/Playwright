const { test, expect } = require('@playwright/test');
const TestHelper = require('../utils/test-helper');

test.describe('Sample Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the website before each test
        await page.goto('/');
    });

    test('should demonstrate a basic test', async ({ page }) => {
        // Example test using the TestHelper
        await TestHelper.fillWhenVisible(page, '#search', 'playwright');
        await TestHelper.clickWhenVisible(page, '#submit-button');
        
        // Example of a basic assertion
        await TestHelper.assertText(page, '#results-count', '5 results found');
    });

    test('should demonstrate test with custom viewport', async ({ page }) => {
        // Example of setting a custom viewport for a specific test
        test.use({ viewport: { width: 1920, height: 1080 } });
        
        await page.goto('/responsive-page');
        const element = await page.waitForSelector('.desktop-only');
        expect(await element.isVisible()).toBeTruthy();
    });
});
