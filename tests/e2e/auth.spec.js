const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { config } = require('../fixtures/config');

test.describe('Authentication', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login(config.users.standard.username, config.users.standard.password);
        const message = await loginPage.getSuccessMessage();
        expect(message).toContain('You logged in successfully');
    });

    test('should show error with invalid credentials', async () => {
        await loginPage.login('invalid', 'invalid');
        const message = await loginPage.getErrorMessage();
        expect(message).toContain('Your username is invalid');
    });
});
