import { test as base, Page } from '@playwright/test';
import { ExamplePage } from '../pages/examplePage';

// Extend the base test with your page objects (fixtures). 
// This allows using pages directly in tests without creating objects from them manually.
// In your test, you can access page methods via the `examplePage` fixture,
// e.g.:
// test('click pricing button and confirm you are on pricing page', async ({ examplePage(add your pages here) }) 
// import { test ,expect } from '../fixtures/baseFixture';

type baseFixtures = {
  examplePage: ExamplePage;
};

export const test = base.extend<baseFixtures>({
  examplePage: async ({ page }, use) => {
    const examplePage = new ExamplePage(page);
    await use(examplePage);
  },
});

export { expect } from '@playwright/test';