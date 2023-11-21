import{ Given ,When ,Then ,setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { AbTesting } from "../pages/AbTesting"

setDefaultTimeout(60 * 2 * 1000);

When('User is able to select', async function() {
    let abTesting = new AbTesting(pageFixture.page)
    await abTesting.assertText();
});

Then('User is able to get text',async function() {
    let asertText = new AbTesting(pageFixture.page)
    await asertText.getHeading();
});


    
