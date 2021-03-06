const app = require('../../app');
const request = require('supertest')(app);

jest.mock('../../utils/api.js', () => ({
  getCaptcha: jest.fn().mockReturnValue({ token: '1U2CB', url: 'xxxxx' }),
}));

test('should / status 200', async () => {
  const res = await request
    .get('/signin')
    .expect(200);

  expect(res.text).toContain('登录');
});

test('should / status 200', async () => {
  const res = await request
    .get('/signup')
    .expect(200);

  expect(res.text).toContain('注册');
});

