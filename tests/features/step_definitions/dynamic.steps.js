const { Given, When, Then } = require('@cucumber/cucumber') 
const { expect } = require('@playwright/test') 
const { DynamicPage } = require('../../pages/dynamic.page') 

let dynamicPage 

// Add/Remove Elements
Given('I am on the add\\/remove elements page', async function() {
    dynamicPage = new DynamicPage(this.page) 
    await dynamicPage.gotoAddRemove() 
}) 

When('I click the Add Element button {int} times', async function(times) {
    for (let i = 0;  i < times;  i++) {
        await dynamicPage.addElement() 
    }
}) 

Then('I should see {int} Delete buttons', async function(count) {
    expect(await dynamicPage.getDeleteButtonCount()).toBe(count) 
}) 

When('I click the first Delete button', async function() {
    await dynamicPage.deleteElement(0) 
}) 

// Dynamic Controls
Given('I am on the dynamic controls page', async function() {
    dynamicPage = new DynamicPage(this.page) 
    await dynamicPage.gotoDynamicControls() 
}) 

Then('the input field should be disabled', async function() {
    expect(await dynamicPage.input.isDisabled()).toBeTruthy() 
}) 

When('I click the Enable button', async function() {
    await dynamicPage.enableInput() 
}) 

Then('the input field should be enabled', async function() {
    expect(await dynamicPage.input.isDisabled()).toBeFalsy() 
}) 

Then('I should be able to type {string} in the input', async function(text) {
    await dynamicPage.typeInInput(text) 
    expect(await dynamicPage.input.inputValue()).toBe(text) 
}) 

When('I click the Disable button', async function() {
    await dynamicPage.disableInput() 
}) 

// Dynamic Loading
Given('I am on the dynamic loading page example {string}', async function(example) {
    dynamicPage = new DynamicPage(this.page) 
    await dynamicPage.gotoDynamicLoading(example) 
}) 

When('I click the Start button', async function() {
    await dynamicPage.startButton.click() 
}) 

Then('I should see the loading indicator', async function() {
    await expect(dynamicPage.loadingIndicator).toBeVisible() 
}) 

Then('the loading indicator should disappear', async function() {
    await expect(dynamicPage.loadingIndicator).toBeHidden() 
}) 

Then('I should see the text {string}', async function(text) {
    await expect(dynamicPage.finishText).toBeVisible() 
    expect(await dynamicPage.getFinishText()).toBe(text) 
}) 
