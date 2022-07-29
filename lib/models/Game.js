const pool = require('../utils/pool');

module.exports = class Game {
  id;
  name;
  genre;
  platform;
  yearReleased;
  review;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.platform = row.platform;
    this.yearReleased = row.year_released;
    this.review = row.review;
  }

  static async getAll () {
    const { rows } = await pool.query('SELECT * FROM games;');
    return rows.map((row) => new Game(row)); 
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM games WHERE id=$1', [id]);
    if(!rows[0]) return null;

    return new Game(rows[0]);
  }
};
