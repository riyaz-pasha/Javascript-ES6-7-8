const restEx = (...all) => console.log("all", all);

restEx(1, 2, 3);
restEx(1, 2, 3, 4, 5);

const restEx2 = (first, ...exceptFirst) => console.log("exceptFirst", exceptFirst);

restEx2();
restEx2(1);
restEx2(1, 2, 3);
restEx2(1, 2, 3, 4, 5);

const newArray = [1, 2, 3];
console.log("newArray", newArray);
console.log("...newArray", ...newArray);
