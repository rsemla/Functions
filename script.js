var wrapperEle = document.body.querySelector(".wrapper");
var headOneEle = document.body.querySelector(".headOne");
var headTwoEle = document.body.querySelector(".headTwo");
var headThreeEle = document.body.querySelector(".headThree");
var headFourEle = document.body.querySelector(".headFour");
var buttonEle = document.body.querySelector(".editButton");
var miles;
var cost;
var totalCost12;
var totalCost17;

function writerFunction(miles, cost){
 var totalCost12 = (miles / 12) * cost;
var totalCost17 = (miles / 17) * cost;
var totalCost26 = (miles / 26) * cost;
var totalCost29 = (miles / 29) * cost;
headOneEle.innerHTML="To drive a car with an MPG rating of 12 for " +miles +" miles at $"+cost +" per gallon would cost $" +totalCost12;
headTwoEle.innerHTML="To drive a car with an MPG rating of 17 for " +miles +" miles at $"+cost +" per gallon would cost $" +totalCost17; 
headThreeEle.innerHTML="To drive a car with an MPG rating of 26 for " +miles +" miles at $"+cost +" per gallon would cost $" +totalCost26;
headFourEle.innerHTML="To drive a car with an MPG rating of 29 for " +miles +" miles at $"+cost +" per gallon would cost $" +totalCost29; 
}
rewriteFunction();

buttonEle.addEventListener("click", function(){         
     rewriteFunction();
})

function rewriteFunction(){
  var inputMiles = Number(prompt("Enter Miles Per Year Driven: "));
  var inputCost = Number(prompt("Enter the Cost Per Gallon of Gas: "));
  
  writerFunction(inputMiles, inputCost);
}

/* function calculateMilage(miles, mpg, cost){
var totalCost12 = (miles / mpg) * cost;
var totalCost17 = (miles / mpg) * cost;
var totalCost26 = (miles / mpg) * cost;
var totalCost29 = (miles / mpg) * cost;
}*/
