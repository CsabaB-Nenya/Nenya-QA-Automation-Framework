import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  outputDir: "test-results",
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // HTML reporter outside of 'test-results'
    ["html", { outputFolder: "reports/html-report" }],

    // Allure results under 'reports'
    ["allure-playwright", { resultsDir: "reports/allure-results" }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /*
  // Base URL used for page.goto('/') and similar navigation calls.
  baseURL: 'https://your-app-url.com',

  // Keep a video recording only if the test fails.
  video: 'retain-on-failure',

  // Set the browser language (for localization testing).
  locale: 'en-US',

 // Set the browser window size (useful for desktop vs mobile simulation).
  viewport: { width: 1920, height: 1080 },

  // Simulate a specific timezone (for time-sensitive features).
  timezoneId: 'Europe/Istanbul',

  // Simulate light or dark mode.
  colorScheme: 'light',

  // Ignore HTTPS certificate errors (useful in staging environments).
  ignoreHTTPSErrors: true,

  // Grant browser permissions (e.g., location, camera).
  permissions: ['geolocation'],

  // Simulate a geolocation (used in map or location-based tests).
  geolocation: { latitude: 0, longitude: 0 }, // placeholder coordinates

  // Load a saved login state to skip authentication steps.
  storageState: 'path/to/fake-storage-state.json',

  // Run browser in headless mode (no UI, faster in CI).
  headless: true,
*/
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /* collect screenshots on failure */
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
