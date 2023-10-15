exports.config = {

  /**
   * specify test files
   */
  specs: [
    './runner-specs/mocha.test.js'
  ],

  /**
   * capabilities
   */
  capabilities: [{
    name: 'My First App Test',
    deviceName: 'Pixel 2',
    platformName: 'Android',
    version: '7.1',
    app: 'https://testingbot.com/appium/sample.apk'
  }],

  /**
   * test configurations
   */
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'screenshots',
  waitforTimeout: 10000,
  framework: 'mocha',
  services: [
    ['testingbot']
  ],
  user: 'api_key',
  key: 'api_secret',

  reporters: ['dot'],
  reporterOptions: {
    outputDir: './'
  },

  mochaOpts: {
    ui: 'bdd'
  }
};