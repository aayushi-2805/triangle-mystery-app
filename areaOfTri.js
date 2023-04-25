let inputBase = document.querySelector(".inputBase");
let inputHeight = document.querySelector(".inputHeight");
let calculateBtn = document.querySelector("#calculateArea");
let output = document.querySelector("#output");

calculateBtn.addEventListener("click", isPositive);

function calculateArea() {
  let area = (1 / 2) * (Number(inputBase.value) * Number(inputHeight.value));
  output.innerText = "The area of Tringle is =>" + area;
}





function isPositive() {

  if ( Number(inputBase.value) > 0 && Number(inputHeight.value) > 0) {
    calculateArea();
  } else {
     alert ('Invalid Input')
  }



}
//This below logic moderators told that it takes zero also and it takes blank input also so i have changed it 

// function isPositive() {
//   if (Number(inputBase.value) >= 0) {
//     if (Number(inputHeight.value) >= 0) {
//       calculateArea();
//     } else {
//       alert("Height cannot be negative");
//     }
//   } else {
//     alert("Base cannot be negative");
//   }
// }