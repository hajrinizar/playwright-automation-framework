import { type Locator, type Page, expect } from '@playwright/test';

/** Page Object for the Hovers page (/hovers). */
export class HoverPage {
  private readonly page: Page;
  private readonly figures: Locator;

  constructor(page: Page) {
    this.page = page;
    this.figures = page.locator('.figure');
  }

  async goto(): Promise<void> {
    await this.page.goto('/hovers');
  }

  async hoverOverFigure(index: number): Promise<void> {
    await this.figures.nth(index).hover();
  }

  async expectCaptionVisible(index: number, name: string): Promise<void> {
    const caption = this.figures.nth(index).locator('.figcaption');
    await expect(caption).toBeVisible();
    await expect(caption).toContainText(name);
  }
}
