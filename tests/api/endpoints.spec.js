const { test, expect } = require('@playwright/test');
const { config } = require('../fixtures/config');

test.describe('API Tests', () => {
    test('GET request test', async ({ request }) => {
        const response = await request.get('/');
        expect(response.ok()).toBeTruthy();
    });

    test('POST request test', async ({ request }) => {
        const response = await request.post('/login', {
            data: {
                username: config.users.standard.username,
                password: config.users.standard.password
            }
        });
        expect(response.ok()).toBeTruthy();
    });
});
