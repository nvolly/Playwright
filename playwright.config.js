// @ts-check
const { defineConfig, devices } = require('@playwright/test')

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') })

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './regressionTests',

  // Enable fully parallel execution
  fullyParallel: true,

  // Fail the build if `test.only` is accidentally left in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI, retry twice if a test fails
  retries: process.env.CI ? 2 : 0,

  // Run tests with the maximum available parallel workers for full parallelism
  workers: process.env.CI ? 'auto' : 'auto', // 'auto' lets Playwright decide based on CPU cores

  // HTML report for local runs, but can switch to 'junit' for CI
  reporter: process.env.CI ? 'junit' : 'html',

  // Shared settings for all projects
  use: {
    // Enable tracing on first retry for easier debugging
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers
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
  ],

  // Optionally run local dev server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})