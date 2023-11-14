import {expect ,Page} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"
import { PageElement } from "../resources/Interfaces/iPagesElelment"
import * as landingPageLocators from "../resources/landingPage.json"

function getResource(resourceName : string){
    return landingPageLocators.webElements.find((element : PageElement) => element.elementName == resourceName) as PageElement

}

export class AbTesting{
    abTesingPageLocators ={
       abTestingField:() => pageFixture.page.locator(getResource('getAbTesting').selectorValue),
       headingTextLocator:()=> pageFixture.page.locator(getResource('getHeading').selectorValue)
    }


public async goToLandingPage():Promise<any>{
    await pageFixture.page.goto('https://the-internet.herokuapp.com/');

}

    
    public async assertText():Promise<any>{
     await this.abTesingPageLocators.abTestingField().click();
     //await expect(pageFixture.page.locator('.heading1')).toHaveText("A/B Test Control")
    
    }
    public async getHeading():Promise<any>{
       const heading = await this.abTesingPageLocators.headingTextLocator();
       console.log(await heading.textContent());
    }

constructor(public page: Page){
    this.page = page;
}

}