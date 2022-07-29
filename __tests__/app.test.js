const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/games should give all games in database', async () => {
    const resp = await request(app).get('/games');
    expect(resp.body.length).toEqual(6);
  });
});

it('/games/id should give a game specific to the id', async () => {
  const resp = await request(app).get('/games/1');
  expect(resp.body).toEqual({
    id: '1',
    name: 'Stray',
    genre: 'Cat Simulator',
    platform: 'Multiplatform',
    review: 'If you want to be a cat, this has a dedicated meow button. 10/10',
    yearReleased: 2022,
  });
});
afterAll(() => {
  pool.end();
});
