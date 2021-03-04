//create an empty array that will store the first number given 
let firstNum = [];

//create an empty variable that will store what the user whats the calculator to do eg (multiply or divide). lets call this mode for now. eg let mode;
let mode = undefined;

//create an empty array that will store the second number given
let secondNum = [];

//create variable that stores the result - connect it to the result div/input text in the HTML
let result = "";

//create a variable that stores the text for the HTML input that shows the answer
let input = document.getElementById("answer")


//create a function named calculate, that will take in an argument of (value). The (value) will be dependant on what button the person presses. Eg when the 5 button is pressed, the onclick function will be called. eg calculate(5) function will be called.
//Go back to HTML and create an onclick element for each button, then call the calculate function and put in the appropriate value
 
function calculate (num) {

  if ((Number(num) || num == "." || num == 0) && mode == undefined) {
  //if number is pressed but mode not yet chosen, number goes into firstNum variable
    firstNum.push(num);
    input.value = firstNum.join("");
    return;

  } else if ((Number(num) || num == "." || num == 0) && mode != undefined) {
  //if number is pressed and mode is chosem, number goes into the secondNum variable

    secondNum.push(num);
    input.value = secondNum.join("")
    return;

  } else if (num === "AC" || num === "EC") {
  //clear everything if the clear buttons are pressed
    firstNum = [];
    secondNum = [];
    mode = undefined;
    input.value = "";
    return;

  } else if (!Number(num) && num != "%" && num != "=") {
  //if mode is pressed, put it into mode variable 

    if (firstNum.length === 0){
    //if mode is pressed and there is already a previous result, make prev result into firstNum
      firstNum = Array.from(String(result), Number);
    }
    mode = num;
    return;

  } else if (num == "=") {
  // if = is pressed, join the arrays of firstNum and Second Num
    firstNum = firstNum.join("");
    secondNum = secondNum.join("");

  // if secondNum is empty, just show the firstNum as the result
    if (secondNum.length == 0){
      result = firstNum
    }
  
  //Depending on what mode is pressed, calculate accordingly
    switch (mode){
      case "-" :
        result = (firstNum - secondNum);
        break;
      
      case "+":
        result = Number(firstNum) + Number(secondNum);
        break;

      case "*":
        result = (firstNum * secondNum);
        break;

      case "/":
        result = (firstNum / secondNum);
        break;
    }
  // show result and clear everything
    input.value = result;
    firstNum = [];
    secondNum = [];
    mode = undefined;
    return result;
  }

}
