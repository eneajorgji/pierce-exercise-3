import HomePage from '../pageObjects/homePage'
import CheckBikesAmount from '../pageObjects/checkBikesAmount'

describe('Checking amount', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    it('Get amount of bike', function () {
        CheckBikesAmount.amountOfBike();
    })
})