const request = require('supertest');
const app = require('../src/app');

describe('Article API', () => {
    it('should index an article', async () => {
        const response = await request(app)
            .post('/api/articles')
            .send({ title: 'Test', author: 'John', content: 'This is a test article.' });
        expect(response.status).toBe(201);
    });

    it('should search for articles', async () => {
        const response = await request(app).get('/api/search?query=Test');
        expect(response.status).toBe(200);
    });
});
