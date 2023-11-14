import{ Given ,When ,Then ,setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { AbTesting } from "../pages/AbTesting"

setDefaultTimeout(20000);

Given('User visit the website' , async function () {
    let landingPage = new AbTesting(pageFixture.page)
    await landingPage.goToLandingPage();

});

When('User is able to select AbTestings', async function() {
    let abTesting = new AbTesting(pageFixture.page)
    await abTesting.assertText();
})

    
