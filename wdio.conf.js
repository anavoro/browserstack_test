import dotenv from 'dotenv';
dotenv.config();

export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
    updateJob: false,
    specs: [
      './test/specs/**/*.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'appium',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://23c511db2a176dd044a708bbe0549c5a6c38c5c6',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
    'browserstack.env.VALID_USER_EMAIL': 'mimi@example.com',
    'browserstack.env.VALID_USER_PASSWORD': 'kiki2025'
    },
    {
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'appium-second-device',
      device: 'Samsung Galaxy S10',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://23c511db2a176dd044a708bbe0549c5a6c38c5c6',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
      'browserstack.env.VALID_USER_EMAIL': 'mimi@example.com',
      'browserstack.env.VALID_USER_PASSWORD': 'kiki2025'
    } 
  ],
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  
    logLevel: 'debug',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000,
    }
  };