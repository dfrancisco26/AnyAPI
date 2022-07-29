// const pool = require('../lib/utils/pool');
// const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

// const { games } = require; 

// describe('games routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });


//   it('/games should give all games in database', async () => {
//     const res = await request(app).get('/games');
//     const expected = games.map((game) => {
//       return { id: game.id, name: game.name, genre: game.genre };
//     });
//     expect(res.body).toEqual(expected);
//   });
//   afterAll(() => {
//     pool.end();
//   });
// });
