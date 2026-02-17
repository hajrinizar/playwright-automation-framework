import { test } from '../../fixtures/base';

test.describe('Dynamic Loading Page', () => {
  test('hidden element is revealed after loading', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.goto(1);
    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.expectFinishText('Hello World!');
  });

  test('finish text is not visible before clicking Start', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.goto(1);
    await dynamicLoadingPage.expectFinishHidden();
  });

  test('element rendered after the fact', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.goto(2);
    await dynamicLoadingPage.clickStart();
    await dynamicLoadingPage.expectFinishText('Hello World!');
  });
});
