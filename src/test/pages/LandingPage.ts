import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/Interfaces/iPagesElelment";
import * as landingPageLocators from "../resources/landingPage.json"

function getResource(resourceName :string ){
    return landingPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}
export class LandingPage{
    landingPageLocators = {
        functionList:() => pageFixture.page.locator(getResource('allFunctionList').selectorValue),
    }
    public async goToLandingPage():Promise<any>{
        await pageFixture.page.goto('https://the-internet.herokuapp.com/')
    }
    public async checkSelectedFunction(getFunction):Promise<any>{
        const numberOfFunctions = await this.landingPageLocators.functionList().count();
        for(let i=1;i<=numberOfFunctions;i++){
            const el = await pageFixture.page.locator(getResource('getFunction').selectorValue.replace('placeholder', i.toString()));
            const arr = [el.getByText(getFunction).click()];
            console.log(arr);
        }
    }
    constructor(public page: Page){
        this.page = page;
    }
}