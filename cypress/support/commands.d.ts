// cypress/support/commands.d.ts

// Importiere den globalen Namespace von Cypress
declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to click a link by its label.
       * @example cy.clickLink('Home')
       */
      clickLink(label: string): Chainable<Element>;
  
      /**
       * Custom command to log in to the application.
       * @example cy.loginapp('email@example.com', 'password123')
       */
      loginapp(email: string, password: string): Chainable<Element>;
    }
  }