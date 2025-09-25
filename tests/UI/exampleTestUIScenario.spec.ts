import { test, expect } from "../../fixtures/baseFixture";

// Always structure tests in the order: test.describe > test > test.step

test.describe("Navigation to Pricing page is accessible without login", () => {
  test("click pricing button and confirm you are on pricing page", async ({
    examplePage,
  }) => {
    await test.step("Navigate to Nenya homepage ", async () => {
      await examplePage.navigateToNenyaHomepage();
    });

    await test.step("click pricing button", async () => {
      await examplePage.clickPricingButton();
    });

    await test.step("confirm you are on pricing page", async () => {
      await examplePage.verifyOnPricingPage();

      /* 
For simple one-off checks, you can place the soft assertion directly inside the test.step 
instead of creating a dedicated page method.
Example:
    await expect.soft(examplePage.page).toHaveURL(/pricing/);
*/
    });
  });
});
