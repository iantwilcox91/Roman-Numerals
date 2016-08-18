$(function() {
  $("form#romanNumeralForm").submit(function(event){
    event.preventDefault();
    var startNumber = $("input#RomanNumeral").val();
    var resultNumber = ConvertRoman(startNumber);
    $("#result").text(resultNumber);
  });
});




var ConvertRoman = function(startNumber) {
  if (Number.isInteger(parseInt(startNumber))){
// DECIDE IT IS A NUMBER
    if (parseInt(startNumber) === 1000){
      resultNumber = ("M");
    }else if (parseInt(startNumber) === 500){
      resultNumber = ("D");
    } else if (parseInt(startNumber) === 100){
      resultNumber = ("C");
    } else if (parseInt(startNumber) === 50){
      resultNumber = ("L");
    } else if (parseInt(startNumber) === 10){
      resultNumber = ("X");
    } else if (parseInt(startNumber) === 5){
      resultNumber = ("V");
    } else if (parseInt(startNumber) === 1){
        resultNumber = ("I");
    } else {
      resultNumber = startNumber
    }




// IS NOT A NUMBER
  }else{
    resultNumber = ("Please Enter A Real Number");
  }
  $("#result").text(resultNumber);
};
