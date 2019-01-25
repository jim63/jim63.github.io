const express = require('express');
const router = express.Router();
const data = require('../data/flashCardData.json').data;
const cards = data.cards;

router.get('/:id', (req, res) => {
  const {
    side
  } = req.query;
  const {
    id
  } = req.params;
  const text = cards[id][side];
  const {
    hint
  } = cards[id];
  const templaData = {
    text,
    hint
  }
  // res.locals.prompt = 'who is burried?'
  // res.render('card')
  res.render('card', {
    // prompt: cards[req.params.id].question,
    // hint: cards[req.params.id].hint,
    // colors
  })
})

module.exports = router