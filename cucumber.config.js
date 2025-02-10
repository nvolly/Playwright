const { defineConfig } = require('@playwright/test')
const { config } = require('./tests/fixtures/config')

module.exports = defineConfig({
    testDir: './tests/features',
    timeout: 60000,
    fullyParallel: false,
    retries: process.env.CI ? 2 : 0,
    workers: 1,
    reporter: [
        ['html', { outputFolder: 'cucumber-report' }],
        ['list']
    ],
    use: {
        baseURL: config.baseUrl,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: config.timeouts.global,
        navigationTimeout: config.timeouts.navigation,
        headless: false
    },
    projects: [
        {
            name: 'cucumber-tests',
            testMatch: /.*\.feature/
        }
    ]
})
