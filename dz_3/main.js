//1
function numbers (a , b) {
   return console.log(Math.min(a , b))
}
numbers(33 , 24)

//2
let name = prompt()
var appartment = name => alert(` ${name}`)

console.log(name.length)
appartment(name)

//3
function calculator(operation, num1, num2) {
   let result = 0;
   switch (operation) {
      case "+":
         result = num1 + num2;
         break;
      case "-":
         result = num1 - num2;
         break;
      case "*":
         result = num1 * num2;
         break;
      case "/":
         if (num2 === 0) {
            result = "Cannot divide by zero";
         } else {
            result = num1 / num2;
         }
         break;
      default:
         result = "Invalid operation";
   }
   return result;
}

console.log(calculator("+",10,5))
console.log(calculator("-",10,5))
console.log(calculator("*",10,5))
console.log(calculator("/",10,5))
console.log(calculator("/",10,0))
console.log(calculator("0",10,5))