const isValid = require("./validParentheses")

console.log(isValid("()"))
console.log(isValid("[()]"))
console.log(isValid("(())"))
console.log(isValid("{()}"))
console.log(isValid("{{()}}"))
console.log(!isValid("["))
console.log(!isValid("]"))

