const array = [1, 2, 3, 4];

const first = array[0];
const third = array[2];

console.log("first", first);
console.log("third", third);

const [First, , Third] = array;
console.log("First", First);
console.log("Third", Third);

const [, ...ExceptFirstRestAll] = array;
console.log("ExceptFirstRestAll", ExceptFirstRestAll);

const [, , ...ExceptFirstTwoRestAll] = array;
console.log("ExceptFirstTwoRestAll", ExceptFirstTwoRestAll);