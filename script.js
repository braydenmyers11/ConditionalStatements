var containerEle = document.body.querySelector(".container");
var num1 = prompt("Enter a number:");
var op = prompt("Enter an operator *, /, +, -:");
var num2 = prompt("Enter another number:");

if(isNaN(num1)){
  containerEle.innerHTML=("Your first value is not a number")
}
if(isNaN(num2)){
  containerEle.innerHTML=("Your second value is not a number")
}

if(op=="*"){
   var sum = (num1 * num2)
   containerEle.innerHTML=("Your answer is ")+sum
   }
if(op=="/"){
   var sum = (num1 / num2)
   containerEle.innerHTML=("Your answer is ")+sum
   }
if(op=="+"){
   var sum = num1 + num2
   containerEle.innerHTML=("Your answer is ")+sum
   }
if(op=="-"){
   var sum = (num1 - num2)
   containerEle.innerHTML=("Your answer is ")+sum
   }