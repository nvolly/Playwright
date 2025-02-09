const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { config } = require('../../fixtures/config');

class CustomWorld extends World {
    async setup() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        await this.page.goto(config.baseUrl);
    }

    async teardown() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
