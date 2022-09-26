const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  
    requestTimeout: 500000, 
    numTestsKeptInMemory: 0, // No caching of test cases
    responseTimeout: 500000,
    pageLoadTimeout: 500000, 
    baseUrl: "http://geekyants-login.geekydev.com/home", // base URL for your website
    chromeWebSecurity: false,
    watchForFileChanges: true, // Hot reloads the test cases when we make new change
    viewportHeight: 1259, // height of browser viewport
    viewportWidth: 1200, // width of browser viewport
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
