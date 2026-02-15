import { type Locator, type Page, expect } from '@playwright/test';

/** Page Object for the Dropdown page (/dropdown). */
export class DropdownPage {
  private readonly page: Page;
  private readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.getByRole('combobox');
  }

  async goto(): Promise<void> {
    await this.page.goto('/dropdown');
  }

  async selectByText(optionText: string): Promise<void> {
    await this.dropdown.selectOption({ label: optionText });
  }

  async expectSelectedValue(value: string): Promise<void> {
    await expect(this.dropdown).toHaveValue(value);
  }
}
