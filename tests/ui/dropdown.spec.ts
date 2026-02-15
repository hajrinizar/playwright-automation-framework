import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../pages/DropdownPage';

test.describe('Dropdown Page', () => {
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.goto();
  });

  test('no option is selected by default', async () => {
    await dropdownPage.expectSelectedValue('');
  });

  test('selecting Option 1', async () => {
    await dropdownPage.selectByText('Option 1');
    await dropdownPage.expectSelectedValue('1');
  });

  test('selecting Option 2', async () => {
    await dropdownPage.selectByText('Option 2');
    await dropdownPage.expectSelectedValue('2');
  });

  test('changing selection from Option 1 to Option 2', async () => {
    await dropdownPage.selectByText('Option 1');
    await dropdownPage.expectSelectedValue('1');
    await dropdownPage.selectByText('Option 2');
    await dropdownPage.expectSelectedValue('2');
  });
});
