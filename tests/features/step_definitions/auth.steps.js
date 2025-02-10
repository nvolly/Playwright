const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { LoginPage } = require('../../../tests/pages/login.page')
const { config } = require('../../fixtures/config')

let loginPage

Given('I am on the login page', async function() {
    const { page } = this
    loginPage = new LoginPage(page)
    await loginPage.goto()
})

When('I enter valid username and password', async function() {
    await loginPage.login(config.users.standard.username, config.users.standard.password)
})

When('I enter invalid username and password', async function() {
    await loginPage.login('invalid', 'invalid')
})

When('I enter {string} and {string}', async function(username, password) {
    await loginPage.login(username, password)
})

When('I click the login button', async function() {
    await loginPage.loginButton.click()
})

Then('I should see a success message', async function() {
    const message = await loginPage.getSuccessMessage()
    expect(message).toBeTruthy()
    expect(message.toLowerCase()).toContain('success')
})

Then('I should see an error message', async function() {
    const message = await loginPage.getErrorMessage()
    expect(message).toBeTruthy()
    expect(message.toLowerCase()).toContain('invalid')
})

Then('I should see {string}', async function(expectedMessage) {
    let message
    try {
        message = await loginPage.getSuccessMessage()
    } catch (error) {
        try {
            message = await loginPage.getErrorMessage()
        } catch (innerError) {
            throw new Error(`Could not find message containing "${expectedMessage}" in either success or error messages`)
        }
    }
    expect(message.toLowerCase()).toContain(expectedMessage.toLowerCase())
})
