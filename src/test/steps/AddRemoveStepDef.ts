import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { AddRemove } from "../pages/AddRemove";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60 * 2 * 1000);

let addRemoveFunc = new AddRemove(pageFixture.page)

When('User enters {string}', async function(getFunctionName: string){
    await addRemoveFunc.getFunctionName(getFunctionName);
});

When('User clicks Add Element option {int} times', async function(numberOfAddedElement: number){
    await addRemoveFunc.addElement(numberOfAddedElement);
});

Then('{int} element are added', async function(assertTimesElementAdded: number){
    await addRemoveFunc.assertElementIsAdded(assertTimesElementAdded);
});