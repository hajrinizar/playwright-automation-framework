import { type Locator, type Page, expect } from '@playwright/test';

/**
 * Page Object for the authentication flow.
 * Covers /login and /secure routes.
 */
export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly flashMessage: Locator;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: ' Login' });
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

  /**
   * Assert the flash notification contains the expected text.
   * Uses `toContainText` because the flash element includes an embedded
   * close button, making exact match unreliable.
   */
  async expectFlashMessage(expectedText: string): Promise<void> {
    await expect(this.flashMessage).toContainText(expectedText);
  }
}
