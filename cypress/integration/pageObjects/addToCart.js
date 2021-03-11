class AddToCart {
    static addItemToCard() {
        cy.viewport(1280, 720);
        cy.get('#desktopstartpage_hero').then(function($iFrame){
            const iFrameContents = $iFrame.contents().find('.adl-obj-content')
            cy.wrap(iFrameContents).click()
        })
    }
    

}

export default AddToCart

