var men__Button = document.querySelector('.men__Button');
var women__Button = document.querySelector('.women__Button');
var accessories__Button = document.querySelector('.accessories__Button');
var search__Container__Input = document.querySelector('.search__Container__Input');
var logo__Img = document.querySelector('.logo__Img');

men__Button.addEventListener('click', () => {
  window.location = "./index.html?men";
})

women__Button.addEventListener('click', () => {
  window.location = "./index.html?women";
})

accessories__Button.addEventListener('click', () => {
  window.location = "./index.html?accessories";
})

search__Container__Input.addEventListener('keypress', (e) => {
  var search__Text = search__Container__Input.value;
  if (search__Text) {
    if (e.keyCode === 13) {
      search__Container__Input.value = '';
      window.location = `./index.html?search?keyword=${search__Text}`;
    }
  }
})

logo__Img.addEventListener('click', () => {
  window.location = "./index.html"
})