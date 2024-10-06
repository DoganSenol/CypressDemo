//Click on link using label
//Over writing existing contains() commands
//re-usuable custom command

describe('Custom commands',()=>{

    it('handling links', ()=>{

        cy.visit("https://automationteststore.com/");

        //direct - without using custom command
       // cy.get("[title='Benefit Bella Bamba']").click();

       //Using custom command
        cy.clickLink("Benefit Bella Bamba");
        cy.get("h1[class='productname']>span").should('have.text','Benefit Bella Bamba');

    })

    
    it.only('overwriting existing command', () => {
        cy.visit("https://automationteststore.com/");
        
        cy.clickLink("BENEfit bellA BAMBA");
        cy.get("h1[class='productname']>span").should('have.text', 'Benefit Bella Bamba');
    });

     
    it('Login command', () => {
        cy.visit("https://automationteststore.com/");
        
        cy.clickLink("login or register");
        cy.wait(3000);
        cy.loginapp("Cimbom123","tester123");
        cy.get("span[class='maintext']").should('have.text', ' My Account');
    });
   
})

