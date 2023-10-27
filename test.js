const { remote } = require('webdriverio');
var assert = require('assert')



describe('Android Battery Test', () => {
  let client;

  before(async () => {
    client = await remote({
      path: '/',
      hostname: '192.168.43.33',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        'appium:app': 'D:\\Project\\ExpressJs\\mobile_test_webdriver/sample.apk',
        'appium:deviceName': 'U48TZ5YTKZOJCQ4D',
        'appium:appPackage': 'com.sampleapp',
        'appium:automationName': 'UiAutomator2',
      },
      logLevel: 'error',
    });
  });

  it('should calculate a sum', async () => {
    const inputA = await client.$('~inputA')
    await inputA.waitForDisplayed(5000)
    await inputA.click()
    try {
      await inputA.addValue('10')
    } catch (e) { }

    const inputB = await client.$('~inputB')
    await inputB.waitForDisplayed(5000)
    await inputB.click()
    try {
      await inputB.addValue('5')
    } catch (e) { }

    const sumElement = await client.$('~sum')
    const sum = await sumElement.getText()
    console.log(`Got value ${sum}`)
    assert.equal(sum, '15') // 10 + 5
  })

  after(async () => {
    // Close the session
    // await client.deleteSession();
  });
});
