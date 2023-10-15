exports.config = {
    path: '/', // The default path for Appium
    hostname: '192.168.43.33', // The host where Appium server is running
    port: 4723, // The default port for Appium
    specs: ['./test.js'], // Your test script file
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'U48TZ5YTKZOJCQ4D',
            'appium:app': './sample.apk',
            'appium:appPackage': 'com.sampleapp',
            // 'appium:appActivity': '.Settings',
            'appium:automationName': 'UiAutomator2',
        },
    ],
    logLevel: 'error',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
    },
};
