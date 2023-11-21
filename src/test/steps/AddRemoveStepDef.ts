import { Given, When } from "@cucumber/cucumber";
import { AddRemove } from "../pages/AddRemove";
import { pageFixture } from "../hooks/pageFixture";

let addRemoveFunc = new AddRemove(pageFixture.page)

When('User enters {string}', async function(getFunctionName: string){
    await addRemoveFunc.getFunctionName(getFunctionName);
});

When('Clicks Add Element option', async function(){
    console.log('WIP.')
});

When('Element is added', async function(){
    console.log('WIP.')
});