class SubscribeNewsLetter {
    static typeEmail() {
        cy.scrollTo('bottom')
        cy.get('input#newsletterEmailInput.ng-untouched.ng-pristine.ng-invalid').type('email_test#5@gmail.com')
        cy.get('button.m-button.m-button--xs.m-button--square.m-button--navigation').click()
        cy.get('.a-input-message.a-input-message--success.active', { timeout: 5000 }).should('include', 'active')
    }
}

export default SubscribeNewsLetter