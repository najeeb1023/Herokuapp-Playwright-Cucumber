import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { LandingPage } from "../pages/LandingPage";

setDefaultTimeout(15000);

Given('User visits the website', async function (){
    let landingPage = new LandingPage(pageFixture.page);
    await landingPage.goToLandingPage();
});

When('User goes through the web functions', async function (){
    console.log('Function running.')
});

Then('User is able to select {string}', async function (getFunction: string){
    let landingPage = new LandingPage(pageFixture.page);
    await landingPage.checkSelectedFunction(getFunction);
});