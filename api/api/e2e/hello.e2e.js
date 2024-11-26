const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });
});

