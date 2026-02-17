import { test } from '../../fixtures/base';

test.describe('Checkboxes Page', () => {
  test.beforeEach(async ({ checkboxPage }) => {
    await checkboxPage.goto();
  });

  test('checkbox 1 is unchecked by default', async ({ checkboxPage }) => {
    await checkboxPage.expectCheckboxChecked(0, false);
  });

  test('checkbox 2 is checked by default', async ({ checkboxPage }) => {
    await checkboxPage.expectCheckboxChecked(1, true);
  });

  test('toggling checkbox 1 checks it', async ({ checkboxPage }) => {
    await checkboxPage.toggleCheckbox(0);
    await checkboxPage.expectCheckboxChecked(0, true);
  });

  test('toggling checkbox 2 unchecks it', async ({ checkboxPage }) => {
    await checkboxPage.toggleCheckbox(1);
    await checkboxPage.expectCheckboxChecked(1, false);
  });
});
