

describe('MySuite',()=>{

    it('Capture screenshots & videos', ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.screenshot("HomePage");
        cy.wait(5000);
        cy.get("img[title='MacBook']").screenshot("logo");
    

      

       


    })
    it.only('Capture screenshots & videos', ()=>{

        cy.visit("https://automationteststore.com/");

        cy.get("ul[class='nav-pills categorymenu']>li:nth-child(8)").click();

        cy.get("span[class='maintext']").should('have.text',"MakeUp");
      
    

        //Automaticly capture screenshot & video on failure -only when you execute through CLI

       


    })

})