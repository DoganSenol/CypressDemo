describe("Login Test", ()=>{

    it("Login Functionality",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type("Admin");
        cy.xpath("//input[@type='password']").type("admin123");
        cy.get("button[type='submit']").click();

        cy.xpath("//span[text()='Admin']").should('have.text','Admin');
    })
})