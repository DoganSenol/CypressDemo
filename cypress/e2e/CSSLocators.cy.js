

describe('CSSLocators', () => {

    it("csslocators", () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("input[name='username']").type("Admin")

        cy.get("input[name='password']").type("admin123")

        cy.get("button[type='submit']").click()

        cy.get("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").contains("Dashboard")



    })





})