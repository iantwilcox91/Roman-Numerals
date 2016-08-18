// master function
var ConvertRoman = function(userInputNumber) {
  var result = "";
  if (!Number.isInteger(parseInt(userInputNumber))) {
    result = ("Please Enter A Real Number");
  } else {
    for (var i = parseInt(userInputNumber); i > 0 ; i--) {
      if (i >= 4000){
        result = "number must be less than 4000";
        i = i - i;
      } else if (i >= 1000){
        result = result + "M";
        i = i - 999;
      } else if (i >= 900){
        result = result + "DM";
        i = i - 899;
      } else if (i >= 500){
        result = result + "D";
        i = i - 499;
      } else if (i >= 400){
        result = result + "CD";
        i = i - 399;
      } else if (i >= 100){
        result = result + "C";
        i = i - 99;
      } else if (i >= 90){
        result = result + "XC";
        i = i - 89;
      } else if (i >= 50 ){
        result = result + "L";
        i = i - 49;
      } else if (i >= 40) {
        result = result + "XL";
        i = i - 39;
      } else if (i >= 10) {
        result = result + "X";
        i = i - 9;
      } else if (i === 9) {
        result = result + "IX";
        i = i - 8;
      } else if (i >= 5) {
        result = result + "V";
        i = i - 4;
      } else if (i === 4){
        result = result + "IV";
        i = i - 3;
      } else {
        result = result + "I";
      }
    }
  }
  return result;
};


// for pig latin
// ["q","u","e","e","n"];
// var word = "square";
// var i = word.split("").indexOf("q"); // i = 1;
// if ( word[i] === "q" && word[i+1] === "u") {
//   var ending = word.slice(i+2,word.length); //= "een";
//   var output = ending + word.slice(0, i+2) + "ay";
// }
//
// squ are
// arsquay


$(function() {
  $("form#romanNumeralForm").submit(function(event){
    event.preventDefault();
    var userInputNumber = $("input#RomanNumeral").val();
    var returnValue = ConvertRoman(userInputNumber);
    $("#result").text(returnValue);
  });
});
