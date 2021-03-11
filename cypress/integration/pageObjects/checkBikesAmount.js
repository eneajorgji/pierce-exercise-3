class CheckBikesAmount {
    static amountOfBike() {
        cy.viewport(1280, 720);
        cy.get('div.p-fmb-icon > p-fmb-vehicles-count > div')
            .then(($amount) => {
                if ($amount > 0) {
                    console.log('There are' + $amount + 'bikes added');
                } else {
                    console.log('There are no bikes')
                }
            })
    }
}

export default CheckBikesAmount