var productContainer = document.querySelector('.productContainer')
var men = document.getElementsByClassName('menButton')
var women = document.getElementsByClassName('womenButton')
var accessories = document.getElementsByClassName('accessoriesButton')

document.addEventListener("DOMContentLoaded", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/all`);
  xhr.send();
});


men[1].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/men`);
  xhr.send();
});
men[0].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/men`);
  xhr.send();
});

women[1].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/women`);
  xhr.send();
});

women[0].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/women`);
  xhr.send();
});

accessories[1].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/accessories`);
  xhr.send();
});

accessories[0].addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productContainer.innerHTML = "";
      for (let i = 0; i < JSON.parse(xhr.responseText).data.length; i++) {
        var items = JSON.parse(xhr.responseText).data[i];
        var imgURL = items.main_image;
        var colors = items["colors"]
        var colorsAmount = colors.length;
        var colorText = "";
        for (let j = 0; j < colorsAmount; j++) {
          colorText += `<img style="background-color:#${colors[j].code}" class="productColor"></img>`
        }
        var price = items.price;
        var title = items.title;
        productContainer.innerHTML += `<div class="productContainerEach"><img src="${imgURL}"  class="productImage"> <div class="containerProductColor"> ${colorText}
      </div> <p class="productTitle">${title}</p> <p class="productPrice">TWD.${price}</p> </div>`
      }
    }
  }
  xhr.open('GET', `http://18.214.165.31/api/1.0/products/accessories`);
  xhr.send();
});