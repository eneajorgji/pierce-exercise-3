class AddABike {
    static addABikeIcon() {
        cy.viewport(1280, 720);
        cy.get('.drawer-indicator-text.ng-star-inserted')
            .click();
    }

    static addAnItem() {
        cy.viewport(1280, 720);
        cy.get('.m-button.m-button--xs.m-button--navigation--outline')
        .click();
    }

    static closePopUp() {
        cy.get('.m-button.m-button--sm.m-button--floating.m-button--navigation')
            .click();
    }

    static chooseBrand() {
        cy.viewport(1280, 720);
        cy.get('div.m-partfinder-brand-block.ng-tns-c185-22 ul li:first')
            .click();
    }

    static chooseModelYear() {
        cy.viewport(1280, 720);
        cy.get('div.m-partfinder-year-block ul li:first')
            .click();
    }

    static chooseModel() {
        cy.viewport(1280, 720);
        cy.get('div.m-partfinder-model-block.ng-tns-c185-22.fmb-visible ul li:first')
            .click();
        cy.get('p-breadcrumbs.m-breadcrumbs')
            .should('be.visible');
    }

}

export default AddABike