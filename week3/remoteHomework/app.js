const express = require('express');
const app = express();
app.set('view engine', 'pug');



app.listen(3000, () => {
  console.log('the app is rumming on localhost:3000');
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
})

app.get('/getData', (req, res) => {
  let par = Number(req.query.number, 10);
  console.log(Object.keys(req.query).number);
  console.log(req.query);

  if (req.query.number === undefined) {
    res.json({
      sum: '<h1>Lack of Parameter</h1>'
    })
  } else {
    console.log();
    if (isNaN(par) || par % 1 != 0) {
      res.json({
        sum: 'Wrong Parameter'
      })
    } else {
      res.json({
        sum: `<h2> ${((par + 1) * par / 2)} </h2>`
      })
    }
  }
})

app.get('/myName', (req, res) => {
  res.render('myName')
})