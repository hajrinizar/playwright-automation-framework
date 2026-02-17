import { test } from '../../fixtures/base';

test.describe('Dropdown Page', () => {
  test.beforeEach(async ({ dropdownPage }) => {
    await dropdownPage.goto();
  });

  test('no option is selected by default', async ({ dropdownPage }) => {
    await dropdownPage.expectSelectedValue('');
  });

  test('selecting Option 1', async ({ dropdownPage }) => {
    await dropdownPage.selectByText('Option 1');
    await dropdownPage.expectSelectedValue('1');
  });

  test('selecting Option 2', async ({ dropdownPage }) => {
    await dropdownPage.selectByText('Option 2');
    await dropdownPage.expectSelectedValue('2');
  });

  test('changing selection from Option 1 to Option 2', async ({ dropdownPage }) => {
    await dropdownPage.selectByText('Option 1');
    await dropdownPage.expectSelectedValue('1');

    await dropdownPage.selectByText('Option 2');
    await dropdownPage.expectSelectedValue('2');
  });
});
