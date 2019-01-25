const express = require('express');
const app = express();
app.set('view engine', 'pug');
const cookieParser = require('cookie-parser')



app.listen(3000, () => {
  console.log('the app is rumming on localhost:3000');
});

app.use(express.static('public'))
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
})

app.get('/getData', (req, res) => {
  let par = Number(req.query.number, 10);
  if (req.query.number === undefined || req.query.number === '') {
    res.json({
      sum: 'Lack of Parameter'
    })
  } else {
    if (isNaN(par) || par % 1 != 0) {
      res.json({
        sum: 'Wrong Parameter'
      })
    } else {
      res.json({
        sum: `${((par + 1) * par / 2)}`
      })
    }
  }
})

app.get('/myName', (req, res) => {
  res.render('myName', {
    cookies: req.cookies
  })
})

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.username);
  res.redirect('/myName')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/myName')
})