import { When } from "@cucumber/cucumber";
import { Redirect } from "../pages/RedirectPage";
import { pageFixture } from "../hooks/pageFixture";

When('User is able to select a {string}', async function(getFunction: string){
    let redirectPage = new Redirect(pageFixture.page);
    await redirectPage.goToFunctionRedirect(getFunction);
});

When('User is redirected', async function(){
    let redirectPage = new Redirect(pageFixture.page);
    await redirectPage.assertRedirection();
});