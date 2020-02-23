//Arrow Functions

function addFn(num1, num2) {
    return (num1 + num2);
}

console.log(addFn(2, 3));

const addArrowFn = (num1, num2) => { return num1 + num2; }

console.log(addArrowFn(2, 3));

const addArrowFnShortHand = (num1, num2) => num1 + num2;

console.log("addArrowFnShortHand ", addArrowFnShortHand(2, 3));

//Inline functions

console.log("Inline function", function (num1, num2) {
    return num1 + num2
}(3, 4))

console.log("Inline Arrow function", ((num1, num2) => { return num1 + num2 })(1, 2))
