class Login {


    txtUserName="input[name='username']";
    txtPassword="input[name='password']";
    btnSubmit="button[type='submit']";
    verifyLoginMsg="span[class='oxd-topbar-header-breadcrumb']>h6";



    setUserName(username) {
        cy.get(this.txtUserName).type(username);

    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clikSubmit() {

        cy.get(this.btnSubmit).click();

    }

    verifyLogin() {

        cy.get(this.verifyLoginMsg).should('have.text', 'Dashboard')
    }
}

export default Login;