const { test, expect } = require('@playwright/test')
const W3CPage = require('./w3c.regression.page')
const { isVisible, waitForElement, fillInput, clickAndWait } = require('./w3c.regression.helpers')

test.describe('W3C Website Tests', () => {
    let page
    let w3cPage

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        w3cPage = new W3CPage(page)
    })

    test.afterEach(async () => {
        await page.close()
    })

    test('Homepage loads successfully', async () => {
        await w3cPage.goto()
        await waitForElement(page, 'h1')
        const title = await w3cPage.getTitle()
        expect(title).toBe('W3C')
        const headerText = await w3cPage.getMainHeader()
        expect(headerText).toContain('Making the Web work')
    })

    test('Search functionality works', async () => {
        await w3cPage.goto()
        expect(await w3cPage.isSearchInputVisible()).toBe(false)
    })

    test('Navigation to W3C home page works', async () => {
        await w3cPage.goto()
        const title = await w3cPage.getTitle()
        expect(title).toBe('W3C')
    })

})