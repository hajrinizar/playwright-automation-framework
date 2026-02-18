import { test, expect } from '@playwright/test';

test.describe('Posts API', () => {
  test('GET /posts returns 100 posts', async ({ request }) => {
    const response = await request.get('/posts');

    expect(response.status()).toBe(200);

    const posts = await response.json();
    expect(posts).toHaveLength(100);
  });

  test('GET /posts/1 returns correct post', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  test('GET /posts?userId=1 filters posts by user', async ({ request }) => {
    const response = await request.get('/posts?userId=1');
    expect(response.status()).toBe(200);

    const posts = await response.json();
    expect(posts).toHaveLength(10);

    for (const post of posts) {
      expect(post.userId).toBe(1);
    }
  });

  test('POST /posts creates a new post', async ({ request }) => {
    const newPost = {
      title: 'Playwright API Testing',
      body: 'Testing APIs with Playwright is straightforward.',
      userId: 1,
    };

    const response = await request.post('/posts', { data: newPost });
    expect(response.status()).toBe(201);

    const created = await response.json();
    expect(created.title).toBe(newPost.title);
    expect(created.body).toBe(newPost.body);
    expect(created.userId).toBe(newPost.userId);
    expect(created).toHaveProperty('id');
  });

  test('PUT /posts/1 replaces an entire post', async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body content.',
      userId: 1,
    };

    const response = await request.put('/posts/1', { data: updatedPost });
    expect(response.status()).toBe(200);

    const result = await response.json();
    expect(result.title).toBe('Updated Title');
    expect(result.body).toBe('Updated body content.');
  });

  test('PATCH /posts/1 partially updates a post', async ({ request }) => {
    const response = await request.patch('/posts/1', {
      data: { title: 'Patched Title' },
    });
    expect(response.status()).toBe(200);

    const result = await response.json();
    expect(result.title).toBe('Patched Title');
    // Unchanged fields should remain intact
    expect(result).toHaveProperty('body');
    expect(result).toHaveProperty('userId');
  });

  test('DELETE /posts/1 removes a post', async ({ request }) => {
    const response = await request.delete('/posts/1');
    expect(response.status()).toBe(200);
  });

  test('response headers include correct content type', async ({ request }) => {
    const response = await request.get('/posts/1');

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
  });
});
