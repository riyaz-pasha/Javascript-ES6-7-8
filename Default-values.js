//Default values

const add = (num1 = 10, num2 = 20) => num1 + num2;
console.log(add());

console.log(add(100));

console.log(add(-100, -200));