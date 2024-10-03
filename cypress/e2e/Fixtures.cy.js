describe('MyTestSuite', () => {

    /*
     //Direct access
     it('FixtruesDemoTest', () => {
 
         cy.visit("https://opensource-demo.orangehrmlive.com");
 
         cy.fixture('orangehrm').then((data) => {
 
             cy.get("input[name='username']").type(data.username);
             cy.get("input[name='password']").type(data.password);
             cy.get("button[type='submit']").click();
             cy.get("span[class='oxd-topbar-header-breadcrumb']>h6").should('have.text', data.expected);
         })
             */

    let userdata;
    before(() => {
        cy.fixture("orangehrm").then((data) => {
            userdata = data;
        })
    })

    //Access through Hook - for multiple blocks
    it.only('FixturesDemoTest', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com");

        

            cy.get("input[name='username']").type(userdata.username);
            cy.get("input[name='password']").type(userdata.password);
            cy.get("button[type='submit']").click();
            cy.get("span[class='oxd-topbar-header-breadcrumb']>h6").should('have.text', userdata.expected)
        })


    })

