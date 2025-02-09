const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('Visual Regression Tests', () => {
    test('login page visual comparison', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveScreenshot('login-page.png');
    });

    test('error message visual comparison', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid', 'invalid');
        await expect(page).toHaveScreenshot('login-error.png');
    });

    test('responsive design test', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        // Test different viewport sizes
        const viewports = [
            { width: 1280, height: 720 },
            { width: 768, height: 1024 },
            { width: 375, height: 812 }
        ];

        for (const viewport of viewports) {
            await page.setViewportSize(viewport);
            await expect(page).toHaveScreenshot(`login-page-${viewport.width}x${viewport.height}.png`);
        }
    });
});
