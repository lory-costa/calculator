//create an empty array that will store the first number given 
//create an empty variable that will store what the user whats the calculator to do eg (multiply or divide). lets call this mode for now. eg let mode;
//create an empty array that will store the second number given

//create variable that stores the result - connect it to the result div/input text in the HTML

//create a function named calculate, that will take in an argument of (value). The (value) will be dependant on what button the person presses. Eg when the 5 button is pressed, the onclick function will be called. eg calculate(5) function will be called.
//Go back to HTML and create an onclick element for each button, then call the calculate function and put in the appropriate value
 
 
//In the function, create if/else if statements 

  //first statement - (if (value) is a number OR (value) is ".") AND mode variable is EMPTY
    //push (value) into first number array

  //second statement - (if (value) is a number OR (value) is ".") AND mode variable is NOT EMPTY
   //push (value) into second number array

   //third statement - if (value) is not a number AND value is not AC AND value is not EC AND value is not %
    //make mode = (value)
  
  //third statment - if (value) is AC OR value is EC
   //make first number, second number and mode empty

   //fourth statment - if (value) is "="
    //concat the first number array and make it into a string so it makes a whole number 
    //store that into a variable
    //parseInt variable to turn it into a number
    //concat the second number array and make it into a string so it makes a whole number
    //store that into a variable 
    //parseInt variable to turn it into a number

    //create another if/else statements 
      //first statement - if mode is -
        // result = number 1 - number 2 

      //second statement - if mode is +
        //result = number 1 + number 2

      //third statment - if mode is /
        //result = number 1/number 2

      //fourth statement - if mode is *
        //result = number 1 * number 2 

    //clear first number, second number and mode variables
    //return 
    



var entries = [];
var total = 0;

var temp = "";
$("button").on("click", function () {
  var val = $(this).text();

  // Got a number, add to temp
  if (!isNaN(val) || val === ".") {
    temp += val;
    $("#answer").val(temp.substring(0, 10));

    // Got some symbol other than equals, add temp to our entries
    // then add our current symbol and clear temp
  } else if (val === "AC") {
    entries = [];
    temp = "";
    total = 0;
    $("#answer").val("");

    // Clear last entry
  } else if (val === "CE") {
    temp = "";
    $("#answer").val("");

    // Change multiply symbol to work with eval
  } else if (val === "x") {
    entries.push(temp);
    entries.push("*");
    temp = "";

    // Change divide symbol to work with eval
  } else if (val === "÷") {
    entries.push(temp);
    entries.push("/");
    temp = "";

    // Got the equals sign, perform calculation
  } else if (val === "=") {
    entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i + 1]);
      var symbol = entries[i];

      if (symbol === "+") {
        nt += nextNum;
      } else if (symbol === "-") {
        nt -= nextNum;
      } else if (symbol === "*") {
        nt *= nextNum;
      } else if (symbol === "/") {
        nt /= nextNum;
      }

      i++;
    }

    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + "-";
    }

    $("#answer").val(nt);
    entries = [];
    temp = "";

    // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = "";
  }
});
