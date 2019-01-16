const myHeading = document.getElementById("heading");

myHeading.addEventListener("click", () => {
  if (myHeading.innerText === "YOU JUST CLICKED!!!") {
    myHeading.innerText = "Hello Strangers !"
  } else {
    myHeading.innerText = "YOU JUST CLICKED!!!"
  }
})

const click2Action = document.getElementById("click2Show");
const addContent = document.getElementById("addContent");

click2Action.addEventListener("click", () => {
  if (click2Action.innerText === 'Click2Show') {
    addContent.style.cssText = 'display:show';
    click2Action.innerText = 'Click2Hide';

  } else {
    addContent.style.cssText = 'display:none';
    click2Action.innerText = 'Click2Show';
  }
})

const ham = document.getElementById('ham');
const side = document.getElementById('side')
ham.addEventListener("click", () => {
  ham.classList.toggle("change");
  side.classList.toggle('hide')
})