describe('MySuite', () => {

    it('DataDrivenTest', () => {

        cy.fixture("orangehrm2").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/auth/login");

            data.forEach((userdata) => {
                cy.get("input[name='username']").type(userdata.username);
                cy.get("input[name='password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.get("span[class='oxd-topbar-header-breadcrumb']>h6").should('have.text', userdata.expected);
                    cy.get("span[class='oxd-userdropdown-tab']").click();
                    cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)").click();

                }

                else {
                    cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text', userdata.expected);
                }


            })
        })
    })
})