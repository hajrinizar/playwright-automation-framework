import { type Page, type Locator, expect } from '@playwright/test';

/** Page Object for the Checkboxes page (/checkboxes). */
export class CheckboxPage {
  private readonly page: Page;
  private readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkboxes = page.getByRole('checkbox');
  }

  async goto(): Promise<void> {
    await this.page.goto('/checkboxes');
  }

  async toggleCheckbox(index: number): Promise<void> {
    await this.checkboxes.nth(index).click();
  }

  async expectCheckboxChecked(index: number, checked: boolean): Promise<void> {
    await expect(this.checkboxes.nth(index)).toBeChecked({ checked });
  }
}
