const { setWorldConstructor, World } = require('@cucumber/cucumber') 
const { chromium } = require('@playwright/test') 
const { config } = require('../../fixtures/config') 

class CustomWorld extends World {
    async setup() {
        const browser = await chromium.launch({ 
            headless: false,
            slowMo: 100
        }) 
        const context = await browser.newContext() 
        this.page = await context.newPage() 
        this.browser = browser 
        this.context = context 
        await this.page.goto(config.baseUrl) 
    }

    async teardown() {
        if (this.browser) {
            await this.browser.close() 
        }
    }
}

setWorldConstructor(CustomWorld) 
