import{ Given ,When ,Then ,setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { AbTesting } from "../pages/AbTesting"

setDefaultTimeout(15000);

Given('User visit the website' , async function () {
    let landingPage = new AbTesting(pageFixture.page)
    await landingPage.goToLandingPage();

});


When('User is able to select', async function() {
    let abTesting = new AbTesting(pageFixture.page)
    await abTesting.assertText();
})

Then('User is able to get text',async function() {
    let asertText = new AbTesting(pageFixture.page)
    await asertText.getHeading();
    
})


    
