let inputs = document.querySelectorAll(".input-angles");
let btn = document.querySelector("#check-btn");
let outputE = document.querySelector("#output");
btn.addEventListener("click", isPositive);

function calculateSum(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  return sum;
}

function clickEventHandler() {
  sum = calculateSum(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    outputE.innerText = "Yes These attributes are of a Triangle ";
  } else {
    outputE.innerText = "No !! , Angles with sum 180 will only make a triangle ";
  }
}

function isPositive() {
  if ( Number(inputs[0].value )> 0) {
    if ( Number(inputs[1].value)> 0) {
      if ( Number(inputs[2].value)>0) {
        clickEventHandler();
      } else {
        alert("Angle 3 is invalid  ")
      }
      
    } else {
      alert("Angle 2 is invalid  ")
    }
    
  } else {
    alert("Angle 1 is invalid  ")
  }
}