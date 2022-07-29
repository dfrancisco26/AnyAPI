const { Router } = require('express');
const Game = require('../models/Game');
const router = Router();

module.exports = router
  .get('/:id', async (req, res) => {
    const game = await Game.getById(req.params.id);
    console.log(game);
    res.json(game);
  });
  
//   .get('/', async (req, res) => {
//     const cats = await Cat.getAll();
//     const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
//     res.json(ids);
//   });

module.exports = router;
