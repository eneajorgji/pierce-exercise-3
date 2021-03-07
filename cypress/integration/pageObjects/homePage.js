class HomePage {
    static loadHomePage() {
        cy.visit(Cypress.env('url') + '.ie/');
        cy.title().should('include', '24mx')
        cy.get('[class*=qa-consent-agree-btn]', { timeout: 5000 }).should('be.visible');
    }

    static acceptCookies() {
        cy.get('[class*=qa-consent-agree-btn]').click();
    }

}


export default HomePage;