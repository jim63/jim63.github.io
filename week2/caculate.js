function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

let obj = {};
obj.op = '-';
obj.n1 = 1;
obj.n2 = 2;

console.log(calculate(obj));



class calculateObj {
  constructor(operation, num1, num2) {
    this.op = operation;
    this.n1 = num1;
    this.n2 = num2;
  }
}

let obj2 = new calculateObj('+', 1, 11)
console.log(calculate(obj2));