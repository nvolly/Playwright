const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Accessibility Tests', () => {
    test('should pass accessibility scan on login page', async ({ page }) => {
        await page.goto('/login');
        
        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('form inputs should have proper labels', async ({ page }) => {
        await page.goto('/login');
        
        // Check if username input has associated label
        const usernameLabel = await page.$('label[for="username"]');
        expect(await usernameLabel.textContent()).toBeTruthy();

        // Check if password input has associated label
        const passwordLabel = await page.$('label[for="password"]');
        expect(await passwordLabel.textContent()).toBeTruthy();
    });
});
