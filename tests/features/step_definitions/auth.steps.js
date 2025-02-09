const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { config } = require('../../fixtures/config');

let loginPage;

Given('I am on the login page', async function() {
    const { page } = this;
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('I enter valid username and password', async function() {
    await loginPage.login(config.users.standard.username, config.users.standard.password);
});

When('I enter invalid username and password', async function() {
    await loginPage.login('invalid', 'invalid');
});

When('I enter {string} and {string}', async function(username, password) {
    await loginPage.login(username, password);
});

When('I click the login button', async function() {
    // Login button click is handled in the login method
});

Then('I should see a success message', async function() {
    const message = await loginPage.getSuccessMessage();
    expect(message).toContain('You logged in successfully');
});

Then('I should see an error message', async function() {
    const message = await loginPage.getErrorMessage();
    expect(message).toContain('Your username is invalid');
});

Then('I should see {string}', async function(expectedMessage) {
    try {
        const successMessage = await loginPage.getSuccessMessage();
        expect(successMessage).toContain(expectedMessage);
    } catch {
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(expectedMessage);
    }
});
