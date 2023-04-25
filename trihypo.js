let input_of_sides = document.querySelectorAll(".sides-input");

let checkBtn = document.querySelector("#check-btn");
let output = document.querySelector("#output");
checkBtn.addEventListener("click", isPositive);

function calculateHypo() {
  let c = calculateSumOfSquares(
    Number(input_of_sides[0].value),
    Number(input_of_sides[1].value)
  );
  let hypoLength = Math.sqrt(c);
  output.innerText = "The Hypotenuse of triangle is " + hypoLength;
}

function calculateSumOfSquares(a, b) {
  const c = a * a + b * b;
  return c;
}

function isPositive() {

  if ( Number(input_of_sides[0].value) > 0 && Number(input_of_sides[1].value)>  0) {
    calculateHypo()
  } else {
     alert ('Invalid Input')
  }



}



//This below logic moderators told that it takes zero also and it takes blank input also so i have changed it 


// function isPositive() {
//   if (  Number(input_of_sides[0].value) >= 0 ) {
//    if (Number(input_of_sides[1].value)>= 0 ) {
//      
//    } else {
//     alert("Enter the Postive value of Height")
//    }
    
//   } else {
//     alert("Enter the Postive value of Base")
//   }
// }