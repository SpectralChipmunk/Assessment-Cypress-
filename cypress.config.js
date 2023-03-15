const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 1000000,
    baseUrl: "https://swbt-43857.alpha.reportheld-saas.com/admin/main.html",
    setupNodeEvents(on, config) {
    require("cypress-localstorage-commands/plugin")(on, config);
    return config;
    
    },
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



