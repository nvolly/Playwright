// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { config } = require('./tests/fixtures/config');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    workers: process.env.CI ? 1 : 3,
    reporter: [
        ['html', { outputFolder: 'tests/reports' }],
        ['list'],
        ['junit', { outputFile: 'tests/reports/junit-results.xml' }]
    ],
    use: {
        baseURL: config.baseUrl,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: config.timeouts.global,
        navigationTimeout: config.timeouts.navigation
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 13'] },
        },
    ],
});