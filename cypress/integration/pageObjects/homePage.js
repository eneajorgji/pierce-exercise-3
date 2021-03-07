class HomePage {
    static loadHomePage() {
        cy.visit(Cypress.env('url') + '.ie/');
        cy.title().should('include', '24mx')
        cy.get('[class*=qa-consent-agree-btn]', { timeout: 5000 }).should('be.visible');

        // cy.wait(6000)
    }

    static acceptCookies() {
        cy.get('[class*=qa-consent-agree-btn]').click();
    }

    // static reloadPage() {
    //     return cy.reload(true)
    // }

    // static beVisible() {
    //     cy.get('adl-text-box', { timeout: 5000 }).should('have.')
    // }
}

export default HomePage