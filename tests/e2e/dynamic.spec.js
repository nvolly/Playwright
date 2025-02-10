const { test, expect } = require('@playwright/test') 
const { DynamicPage } = require('../pages/dynamic.page') 

test.describe('Dynamic Elements', () => {
    let dynamicPage 

    test.beforeEach(async ({ page }) => {
        dynamicPage = new DynamicPage(page) 
    }) 

    test.describe('Add/Remove Elements', () => {
        test.beforeEach(async () => {
            await dynamicPage.gotoAddRemove() 
        }) 

        test('should add single element', async () => {
            await dynamicPage.addElement() 
            expect(await dynamicPage.getDeleteButtonCount()).toBe(1) 
        }) 

        test('should add multiple elements', async () => {
            const elementsToAdd = 3 
            for (let i = 0  i < elementsToAdd  i++) {
                await dynamicPage.addElement() 
            }
            expect(await dynamicPage.getDeleteButtonCount()).toBe(elementsToAdd) 
        }) 

        test('should remove element', async () => {
            await dynamicPage.addElement() 
            await dynamicPage.addElement() 
            await dynamicPage.deleteElement(0) 
            expect(await dynamicPage.getDeleteButtonCount()).toBe(1) 
        }) 
    }) 

    test.describe('Dynamic Controls', () => {
        test.beforeEach(async () => {
            await dynamicPage.gotoDynamicControls() 
        }) 

        test('should remove and add checkbox', async () => {
            await dynamicPage.removeCheckbox() 
            expect(await dynamicPage.checkbox.count()).toBe(0) 
            
            await dynamicPage.addCheckbox() 
            expect(await dynamicPage.checkbox.count()).toBe(1) 
        }) 

        test('should enable and disable input', async () => {
            expect(await dynamicPage.input.isDisabled()).toBeTruthy() 
            
            await dynamicPage.enableInput() 
            expect(await dynamicPage.input.isDisabled()).toBeFalsy() 
            
            await dynamicPage.typeInInput('Hello World') 
            expect(await dynamicPage.input.inputValue()).toBe('Hello World') 
            
            await dynamicPage.disableInput() 
            expect(await dynamicPage.input.isDisabled()).toBeTruthy() 
        }) 
    }) 

    test.describe('Dynamic Loading', () => {
        test('should load text after delay - Example 1', async () => {
            await dynamicPage.gotoDynamicLoading('1') 
            await dynamicPage.startLoading() 
            expect(await dynamicPage.getFinishText()).toBe('Hello World!') 
        }) 

        test('should load text after delay - Example 2', async () => {
            await dynamicPage.gotoDynamicLoading('2') 
            await dynamicPage.startLoading() 
            expect(await dynamicPage.getFinishText()).toBe('Hello World!') 
        }) 

        test('should show loading indicator', async ({ page }) => {
            await dynamicPage.gotoDynamicLoading('1') 
            await dynamicPage.startButton.click() 
            
            // Verify loading indicator appears
            await expect(dynamicPage.loadingIndicator).toBeVisible() 
            
            // Wait for loading to complete
            await expect(dynamicPage.loadingIndicator).toBeHidden() 
            await expect(dynamicPage.finishText).toBeVisible() 
        }) 
    }) 
}) 
