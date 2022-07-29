const { Router } = require('express');
const Game = require('../models/Game');
const router = Router();

module.exports = router
  .get('/:id', async (req, res) => {
    const game = await Game.getById(req.params.id);
    res.json(game);
    
  })
  .get('/', async (req, res) => {
    const games = await Game.getAll();
    const ids = games.map((game) => ({ id: game.id, name: game.name }));
    res.json(ids);
        
  });

module.exports = router;
