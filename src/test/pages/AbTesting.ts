import {expect ,Page} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"
import { PageElement } from "../resources/Interfaces/iPagesElelment"
import * as landingPageLocators from "../resources/landingPage.json"

function getResource(resourceName : string){
    return landingPageLocators.webElements.find((element : PageElement) => element.elementName == resourceName) as PageElement

}

export class AbTesting{
    AbTesingPageLocators ={
       abTestingField:() => pageFixture.page.locator(getResource('getAbTesting').selectorValue),
       heagingTextLocator:()=> pageFixture.page.locator(getResource('').selectorValue)
    }


public async goToLandingPage():Promise<any>{
    await pageFixture.page.goto('https://the-internet.herokuapp.com/')

}

    
    public async assertText():Promise<any>{
     await this.AbTesingPageLocators.abTestingField().click()
     //await expect(pageFixture.page.locator('.heading1')).toHaveText("A/B Test Control")
    
    }
    public async getText():Promise<any>{
        await this.AbTesingPageLocators.heagingTextLocator().getByText('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
    }

constructor(public page: Page){
    this.page = page;
}

}