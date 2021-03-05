//assign variables
let firstNum = [];
let secondNum = [];
let mode = undefined;
let result = "";
let input = document.getElementById("answer");

function calculate(num) {
  //if number is pressed but mode not yet chosen, number goes into firstNum variable
  if ((Number(num) || num == "." || num == 0) && mode == undefined) {
    firstNum.push(num);
    input.value = firstNum.join("");
    return;
    //if number is pressed and mode is chosem, number goes into the secondNum variable
  } else if ((Number(num) || num == "." || num == 0) && mode != undefined) {
    secondNum.push(num);
    input.value = secondNum.join("");
    return;
    //clear everything if the clear buttons are pressed
  } else if (num === "AC" || num === "EC") {
    firstNum = [];
    secondNum = [];
    mode = undefined;
    input.value = "";
    return;
    //if mode is pressed, put it into mode variable
  } else if (!Number(num) && num != "%" && num != "=") {
    //if mode is pressed and there is already a previous result, make prev result into firstNum
    if (firstNum.length === 0) {
      firstNum = Array.from(String(result), Number);
    }
    mode = num;
    return;
    // if = is pressed, join the arrays of firstNum and Second Num
  } else if (num == "=") {
    firstNum = firstNum.join("");
    secondNum = secondNum.join("");
    // if secondNum is empty, just show the firstNum as the result
    if (secondNum.length == 0) {
      result = firstNum;
    }
    //Depending on what mode is pressed, calculate accordingly
    switch (mode) {
      case "-":
        result = firstNum - secondNum;
        break;

      case "+":
        result = Number(firstNum) + Number(secondNum);
        break;

      case "*":
        result = firstNum * secondNum;
        break;

      case "/":
        result = firstNum / secondNum;
        break;
    }
  

  } else if (num == "%"){

    firstNum = firstNum.join("");
    secondNum = secondNum.join("");

    switch(mode){
      case '+':
        result = firstNum * (Number(secondNum/100) + Number(1));
        break;
      
      case '*':
        result = firstNum * secondNum/100;
        break;

      case '-':
        result = firstNum * ((100-secondNum)/100);
        break;

      case '/':
        result = firstNum * (100/secondNum);
        break;

    }
  

  }
  // show result and clear everything
  input.value = result;
  firstNum = [];
  secondNum = [];
  mode = undefined;
  return result;
}
