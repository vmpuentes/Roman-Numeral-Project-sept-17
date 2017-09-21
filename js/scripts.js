//business Logic
var userInput = "";
var romanNumerals = ["M", "CM","D","CD","C","XC","L", "XL", "X", "IX", "V", "IV", "I"];
var numbersArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
function convertRomanNumeral(number) {
  userInput = "";
  for (var i=0; i <= numbersArray.length; i++) {
    for (var x=0; x <= 3; x++) {
      if (number >= numbersArray[i]) {
        userInput = userInput + romanNumerals[i];
        number = number - numbersArray[i];
      }
    }
  }
  return userInput;
  // alert(userInput);
}


// User Logic
$(document).ready(function() {
  $("#roman").submit(function(event) {
    $("#outputDisplay").empty();
    var number = parseInt($("input#value").val());
    if (number < 4000 && isNaN(number) == false) {
      convertRomanNumeral(number);
      // debugger;
      $("#outputDisplay").append(userInput);
    } else {
      alert("Roman Numerals end at 3999. Please input either a value less than that.")
    }
    event.preventDefault();
  });
});
