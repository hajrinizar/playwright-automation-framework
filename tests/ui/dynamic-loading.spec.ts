import { test, expect } from '@playwright/test';
import { DynamicLoadingPage } from '../../pages/DynamicLoadingPage';

test.describe('Dynamic Loading Page', () => {
  let dynamicLoadingPage: DynamicLoadingPage;

  test.beforeEach(async ({ page }) => {
    dynamicLoadingPage = new DynamicLoadingPage(page);
  });

  test('hidden element is revealed after loading', async () => {
    await dynamicLoadingPage.goto(1);
    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.expectFinishText('Hello World!');
  });

  test('finish text is not visible before clicking Start', async () => {
    await dynamicLoadingPage.goto(1);
    await dynamicLoadingPage.expectFinishHidden();
  });

  test('element rendered after the fact', async () => {
    await dynamicLoadingPage.goto(2);
    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.expectFinishText('Hello World!');
  });
});
