import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { Redirect } from "../pages/RedirectPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60 * 2 * 1000);

When('User is able to select a {string}', async function(getFunction: string){
    let redirectPage = new Redirect(pageFixture.page);
    await redirectPage.goToFunctionRedirect(getFunction);
});

When('User is redirected', async function(){
    let redirectPage = new Redirect(pageFixture.page);
    await redirectPage.assertRedirection();
});