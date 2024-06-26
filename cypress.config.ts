import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/e2e/**/*.cy.ts",
    baseUrl: "http://localhost:1234",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
