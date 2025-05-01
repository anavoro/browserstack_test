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
      app: process.env.BROWSERSTACK_APP_ID || 'bs://4cb071a668df3d2017e2dc9191b78f839e465d5d',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
      'browserstack.env.VALID_USER_EMAIL': process.env.VALID_USER_EMAIL,
      'browserstack.env.VALID_USER_PASSWORD': process.env.VALID_USER_PASSWORD
    },
    {
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'appium-second-device',
      device: 'Samsung Galaxy S10',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://4cb071a668df3d2017e2dc9191b78f839e465d5d',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
      'browserstack.env.VALID_USER_EMAIL': process.env.VALID_USER_EMAIL,
      'browserstack.env.VALID_USER_PASSWORD': process.env.VALID_USER_PASSWORD
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