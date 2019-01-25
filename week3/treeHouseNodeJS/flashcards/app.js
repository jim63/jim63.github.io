const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];



app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser());



app.set('view engine', 'pug');

// app.use((req, res, next) => {
//   const err = new Error('nooooooo!');
//   err.status = 500;
//   next(err);
// })

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cardRoutes')


app.use(mainRoutes);
app.use('/cards', cardRoutes)


app.use((req, res, next) => {
  const err = new Error('not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  app.locals.title = 'My Apple';
  res.locals.error = err;
  res.status(500);
  res.render('error');
})

app.listen(3000, () => {
  console.log('the app is rumming on localhost:3000');
});