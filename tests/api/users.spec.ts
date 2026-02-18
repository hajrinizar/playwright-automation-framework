import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('GET /users returns a list of 10 users', async ({ request }) => {
    const response = await request.get('/users');

    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(users).toHaveLength(10);
  });

  test('GET /users/1 returns a single user with correct structure', async ({ request }) => {
    const response = await request.get('/users/1');
    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('address');
    expect(user).toHaveProperty('phone');
    expect(user).toHaveProperty('company');
  });

  test('GET /users/1 returns correct user data', async ({ request }) => {
    const response = await request.get('/users/1');
    const user = await response.json();

    expect(user.name).toBe('Leanne Graham');
    expect(user.username).toBe('Bret');
    expect(user.email).toBe('Sincere@april.biz');
  });

  test('GET /users/1 address has nested geo object', async ({ request }) => {
    const response = await request.get('/users/1');
    const user = await response.json();

    expect(user.address).toEqual(
      expect.objectContaining({
        city: expect.any(String),
        zipcode: expect.any(String),
        geo: expect.objectContaining({
          lat: expect.any(String),
          lng: expect.any(String),
        }),
      }),
    );
  });

  test('GET /users/999 returns 404 for non-existent user', async ({ request }) => {
    const response = await request.get('/users/999');
    expect(response.status()).toBe(404);
  });

  test('POST /users creates a new user', async ({ request }) => {
    const newUser = {
      name: 'Nizar Hajri',
      username: 'nizarhajri',
      email: 'nizar@example.com',
    };

    const response = await request.post('/users', { data: newUser });
    expect(response.status()).toBe(201);

    const created = await response.json();
    expect(created.name).toBe(newUser.name);
    expect(created.username).toBe(newUser.username);
    expect(created.email).toBe(newUser.email);
    expect(created).toHaveProperty('id');
  });
});
