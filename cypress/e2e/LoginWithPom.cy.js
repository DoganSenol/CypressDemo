

import Login from "../PageObjects/LoginPage2.js";

describe('pom', ()=>{

    //General approach
    it('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get("span[class='oxd-topbar-header-breadcrumb']>h6").should('have.text', 'Dashboard')

    })

    //using pom
    it('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

       const ln=new Login();
       ln.setUserName("Admin");
       ln.setPassword("admin123");
       ln.clikSubmit();
       ln.verifyLogin();
})

   //using pom with fixtures
   it.only('LoginTest',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.fixture('orangehrm').then(  (data)=>{


        const ln=new Login();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.clikSubmit();
        ln.verifyLogin();
    })

 
})
})