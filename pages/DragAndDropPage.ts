import { type Locator, type Page, expect } from '@playwright/test';

/** Page Object for the Drag and Drop page (/drag_and_drop). */
export class DragAndDropPage {
  private readonly page: Page;
  private readonly columnA: Locator;
  private readonly columnB: Locator;

  constructor(page: Page) {
    this.page = page;
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async goto(): Promise<void> {
    await this.page.goto('/drag_and_drop');
  }

  async dragAToB(): Promise<void> {
    await this.columnA.dragTo(this.columnB);
  }

  async expectColumnAHeader(text: string): Promise<void> {
    await expect(this.columnA.locator('header')).toHaveText(text);
  }

  async expectColumnBHeader(text: string): Promise<void> {
    await expect(this.columnB.locator('header')).toHaveText(text);
  }
}
