import { test } from '../../fixtures/base';

interface LoginTestCase {
  scenario: string;
  username: string;
  password: string;
  expectedError: string;
}

const negativeLoginCases: LoginTestCase[] = [
  {
    scenario: 'invalid username',
    username: 'invaliduser',
    password: 'SuperSecretPassword!',
    expectedError: 'Your username is invalid!',
  },
  {
    scenario: 'invalid password',
    username: 'tomsmith',
    password: 'WrongPassword',
    expectedError: 'Your password is invalid!',
  },
  {
    scenario: 'empty username',
    username: '',
    password: 'SuperSecretPassword!',
    expectedError: 'Your username is invalid!',
  },
  {
    scenario: 'empty password',
    username: 'tomsmith',
    password: '',
    expectedError: 'Your password is invalid!',
  },
  {
    scenario: 'both fields empty',
    username: '',
    password: '',
    expectedError: 'Your username is invalid!',
  },
];

test.describe('Login - Negative Scenarios (Data-Driven)', () => {
  for (const { scenario, username, password, expectedError } of negativeLoginCases) {
    test(`rejects login with ${scenario}`, async ({ loginPage }) => {
      await loginPage.goto();
      await loginPage.login(username, password);
      await loginPage.expectFlashMessage(expectedError);
    });
  }
});
