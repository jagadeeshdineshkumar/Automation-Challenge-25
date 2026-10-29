const path = require('path');

const APP_PATH = path.join(__dirname, 'app', 'Android-MyDemoAppRN.1.3.0.build-244.apk');

exports.config = {
  name: 'sauce-demo-mobile-automation',
  tests: './tests/**/*_test.js',
  output: './output',

  helpers: {
    Appium: {
      platform: 'Android',
      device: 'emulator',
      app: APP_PATH,
      host: process.env.APPIUM_HOST || '127.0.0.1',
      port: parseInt(process.env.APPIUM_PORT || '4723', 10),
      path: '/',
      desiredCapabilities: {
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': process.env.DEVICE_NAME || 'Android Emulator',
        'appium:appWaitActivity': '*',
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 300,
        'appium:uiautomator2ServerInstallTimeout': 120000,
        'appium:androidInstallTimeout': 180000,
        'appium:adbExecTimeout': 120000,
      },
    },
  },

  include: {
    I: './steps_file.js',
    menuPage: './pages/menu.page.js',
    loginPage: './pages/login.page.js',
    productsPage: './pages/products.page.js',
    productDetailsPage: './pages/productDetails.page.js',
    cartPage: './pages/cart.page.js',
    checkoutAddressPage: './pages/checkoutAddress.page.js',
    checkoutPaymentPage: './pages/checkoutPayment.page.js',
    checkoutReviewPage: './pages/checkoutReview.page.js',
    checkoutCompletePage: './pages/checkoutComplete.page.js',
  },

  mocha: {
    reporterOptions: {
      reportDir: './output/report',
      reportFilename: 'checkout-report',
      overwrite: true,
      html: true,
      json: true,
    },
  },

  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
      retries: 2,
    },
  },

  timeout: 300,
};
