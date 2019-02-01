
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
const square = document.querySelector("#square");
console.log(square);

const buttons = document.querySelectorAll("button");
console.log(buttons);


for (let element of buttons) {
  element.addEventListener(`click`, handleClickButton);
  function handleClickButton() {
      let color = element.id;
      console.log(color);
      switch (color) {
        case "blue":
          square.style.backgroundColor = "blue";
          break;
        case "red":
          square.style.backgroundColor = "red";
          break;
        case "green":
          square.style.backgroundColor = "green"
      }
  }
}
