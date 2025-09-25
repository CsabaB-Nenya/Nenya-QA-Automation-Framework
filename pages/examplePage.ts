import { Page, Locator, expect } from '@playwright/test';

 // ExamplePage represents the Nenya homepage and its elements/actions.
// Use the locators and actions defined in this page object
// and call them directly in your tests via the base fixture,
// e.g.:
// await examplePage.navigateToNenyaHomepage();

export class ExamplePage {
  readonly page: Page;
  readonly pricingButtonA: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pricingButtonA = page.getByRole('link', { name: 'PRICING', exact: true }).first();
    
    /*
   -Always add the element’s tag at the end of your locator name, following the CAST naming convention
   Example: pricingButtonA - <a data-testid="pricing-button">PRICING</a>
   
   -Specific elements with long custom tags should follow this example: 
   
   <spesific-long-tagged-button-element  data-testid="chat-container" >  </spesific-long-tagged-button-element> 
   
   this.chatContainerButton = page.getByTestId('chat-container');   //spesific-long-tagged-button-element
*/

  }

  async navigateToNenyaHomepage() {
    await this.page.goto('https://www.nenya.io/');
  }

  async clickPricingButton() {
    await this.pricingButtonA.click();
  }

  async verifyOnPricingPage() {
  await expect.soft(this.page).toHaveURL(/pricing/);
  }

}