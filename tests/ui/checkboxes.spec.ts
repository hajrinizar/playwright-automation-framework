import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../../pages/CheckboxPage';

test.describe('Checkboxes Page', () => {
  let checkboxPage: CheckboxPage;

  test.beforeEach(async ({ page }) => {
    checkboxPage = new CheckboxPage(page);
    await checkboxPage.goto();
  });

  test('checkbox 1 is unchecked by default', async () => {
    await checkboxPage.expectCheckboxChecked(0, false);
  });

  test('checkbox 2 is checked by default', async () => {
    await checkboxPage.expectCheckboxChecked(1, true);
  });

  test('toggling checkbox 1 checks it', async () => {
    await checkboxPage.toggleCheckbox(0);
    await checkboxPage.expectCheckboxChecked(0, true);
  });

  test('toggling checkbox 2 unchecks it', async () => {
    await checkboxPage.toggleCheckbox(1);
    await checkboxPage.expectCheckboxChecked(1, false);
  });
});
