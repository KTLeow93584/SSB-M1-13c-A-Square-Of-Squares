// ===================================
function isPerfectSquare(number) {
  const inputType = typeof(number);
  let result = number;
  // Debug
  //console.log("Input: " + number);
  
  if (inputType !== "number") {
    result = parseFloat(number);
    
    // Debug
    //console.log("Result: " + number);
    
    if (isNaN(result)) {
      console.log(`The input [${number}] is not a valid number.`);
      return null;
    }
  }

  // If it is a whole number, dividing by 1 should return "zero", otherwise if decimal, it'll return the remainder.
  // E.g.
  // 2 % 1 = 0.
  // 2.21 % 1 = 0.21.
  return Math.sqrt(number) % 1 === 0;
}
// ===================================
let input = -1;
console.log(`[1] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = 3;
console.log(`[2] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = 9;
console.log(`[3] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = 25;
console.log(`[4] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = "3a";
console.log(`[5] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = "64";
console.log(`[6] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================
input = "aa33";
console.log(`[7] Is ${input} a perfectly squared number? ${isPerfectSquare(input) ? "Yes" : "No"}.`);
console.log("------");
// ===================================