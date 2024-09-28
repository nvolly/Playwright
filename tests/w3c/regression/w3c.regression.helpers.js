const { expect } = require('@playwright/test')

async function isVisible(page, selector) {
    const element = await page.$(selector)
    expect(element).not.toBeNull() 
    const isVisible = await element.isVisible()
    expect(isVisible).toBe(true) 
}

async function waitForElement(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' })
}

async function fillInput(page, selector, text) {
    await waitForElement(page, selector)
    await page.fill(selector, text)
}

async function clickAndWait(page, selector) {
    await waitForElement(page, selector)
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.click(selector),
    ])
}

module.exports = { isVisible, waitForElement, fillInput, clickAndWait }