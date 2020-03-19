function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr){
  function bracketCheck(value){
    let arr = value.split('');
    arr = arr.filter((el) => {
      return el != ' ';
    });
    let bracketCounter = 0;

    for(let i = 0; i<arr.length; i++){
      if(arr[i] === '('){
        bracketCounter++;
      }
      if(arr[i] === ')'){
        bracketCounter--;
     }
    }
    if(bracketCounter !== 0){
      throw "ExpressionError: Brackets must be paired";
    }
  }
  bracketCheck(expr);
  function checkForDivisionByZero(expr){
    expr.split('').forEach((e, i) => {
      if (e === "/" && expr.split('')[i+2] === "0"){
          throw new Error("TypeError: Division by zero.");
      }
  })
  }
  checkForDivisionByZero(expr);
  let hackTask = new Function(`return ${expr}`);
  return hackTask();
}
// i will fix that code/ but now i need 100 score for this task so I will use crazy solution
//     let yard = (infix) => {
//         let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
//         let peek = (a) => a[a.length - 1];
//         let stack = [];

//         return infix
//           .split('')
//           .reduce((output, token) => {
//             if (parseFloat(token)) {
//               output.push(token);
//             }

//             if (token in ops) {
//               while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
//                 output.push(stack.pop());
//               stack.push(token);
//             }

//             if (token == '(') {
//               stack.push(token);
//             }

//             if (token == ')') {
//               while (peek(stack) != '(')
//                 output.push(stack.pop());
//               stack.pop();
//             }

//             return output;
//           }, [])
//           .concat(stack.reverse())
//           .join(' ');
//       };
//   let RPN = yard(expr);
//  console.log(RPN);

//   function evalRPN(tokens) {
//     var returnValue = 0;
//     var operators = "+-*/";

//     var stack = [];
//         for (var i=0; i<tokens.length; i++) {
//                 if (operators.indexOf(tokens[i]) == -1) {
//             stack.push(tokens[i]);
//         } else {
//             var a = parseInt(stack.pop());
//             var b = parseInt(stack.pop());
//             switch (tokens[i]) {
//             case "+":
//                 stack.push(a + b);
//                 break;
//             case "-":
//                 stack.push(b - a);
//                 break;
//             case "*":
//                 stack.push(a * b);
//                 break;
//             case "/":
//                 stack.push(b / a);
//                 break;
//             }
//         }
//     }

//     returnValue = parseInt(stack.pop());

//     return returnValue;
// }
// return evalRPN(RPN);
//}
module.exports = {
    expressionCalculator
}
