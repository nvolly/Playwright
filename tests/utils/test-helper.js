const { expect } = require('@playwright/test') 

class TestHelper {
    /**
     * Wait for element to be visible and click
     * @param {import('@playwright/test').Page} page 
     * @param {string} selector 
     */
    static async clickWhenVisible(page, selector) {
        await page.waitForSelector(selector, { state: 'visible' }) 
        await page.click(selector) 
    }

    /**
     * Wait for element to be visible and fill
     * @param {import('@playwright/test').Page} page 
     * @param {string} selector 
     * @param {string} value 
     */
    static async fillWhenVisible(page, selector, value) {
        await page.waitForSelector(selector, { state: 'visible' }) 
        await page.fill(selector, value) 
    }

    /**
     * Assert element text
     * @param {import('@playwright/test').Page} page 
     * @param {string} selector 
     * @param {string} expectedText 
     */
    static async assertText(page, selector, expectedText) {
        const element = await page.waitForSelector(selector) 
        const text = await element.textContent() 
        expect(text?.trim()).toBe(expectedText) 
    }

    /**
     * Take screenshot with timestamp
     * @param {import('@playwright/test').Page} page 
     * @param {string} name 
     */
    static async takeScreenshot(page, name) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-') 
        await page.screenshot({ path: `./test-results/screenshots/${name}-${timestamp}.png` }) 
    }
}

module.exports = TestHelper 
