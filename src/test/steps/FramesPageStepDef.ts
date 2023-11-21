import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Frames } from "../pages/FramesPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(60 * 2 * 1000);

let framesPage = new Frames(pageFixture.page)

When('User is able to click {string}', async function (getFunction){
    await framesPage.checkSelectedFunction(getFunction);
});

Then('User goes to Nested Frames', async function (){
    await framesPage.workWithNestedFrames();
});