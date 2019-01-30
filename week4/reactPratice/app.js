// const title = React.createElement(
//   'h1', {
//     id: 'main-title',
//     title: 'yoyo'
//   },
//   'hello, React!'
// );

const title = ' my first react element';
const desc = 'i just learned';
const myTitle = "myTitle";
const name = "guil";

// const desc = React.createElement(
//   'p',
//   null,
//   'i just learned to createdddddddd'
// );

// const header = (React.createElement('header',
//   null,
//   title,
//   desc
// ))

const header = (
  <header>
    <h1 id={myTitle}>{name}'s</h1>
    <p className='dddd'>{desc}</p>
  </header>
)

ReactDOM.render(
  header, document.getElementById('root')
);
