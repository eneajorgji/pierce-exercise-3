import HomePage from '../pageObjects/homePage'
import AddABike from '../pageObjects/addABike'

describe('Add a Bike', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    it('Click add anvelihicle', function(){
        AddABike.addABikeIcon();
        AddABike.addAnItem();
        AddABike.closePopUp();
        AddABike.chooseBrand();
        AddABike.chooseModelYear();
        AddABike.chooseModel();
        // AddABike.getText();
    })
})