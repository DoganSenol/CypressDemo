class Login {

    setUserName(username) {
        cy.get("input[name='username']").type(username);

    }

    setPassword(password) {
        cy.get("input[name='password']").type(password);
    }

    clikSubmit() {

        cy.get("button[type='submit']").click();

    }

    verifyLogin() {

        cy.get("span[class='oxd-topbar-header-breadcrumb']>h6").should('have.text', 'Dashboard')
    }
}

export default Login;