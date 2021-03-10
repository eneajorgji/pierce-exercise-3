import SearchBike from '../pageObjects/searchBike'
import HomePage from '../pageObjects/homePage'

describe('Search for a Bike', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    it('Search for a Bike', function () {
        SearchBike.searchElement();
    })

    it('Get amount of elements', function () {
        SearchBike.getSearchResultName();
    })
})