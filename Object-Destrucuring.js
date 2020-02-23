const Person = {
    firstName: "Riyaz",
    lastName: "Mohammed",
    age: 22
}

const { firstName } = Person;
console.log("firstName", firstName);

const { ...DuplicatePerson } = Person;
console.log("DuplicatePerson", DuplicatePerson)
console.log("Person == DuplicatePerson", Person == DuplicatePerson);
console.log("Person === DuplicatePerson", Person === DuplicatePerson);

const { lastName, ...exceptLastNameRestAll } = Person;
console.log("exceptLastNameRestAll", exceptLastNameRestAll);

const { LastName, ...all } = Person;
console.log("all", all);// all because LastName doesn't exist (LastName !== lastName)

const Employee = {
    fullName: "Riyaz",
    role: "Dev",
    experience: 1,
}
const { fullName: fn, role: Role } = Employee;
// console.log("fullName", fullName); Can access //ReferenceError: fullName is not defined
console.log("fn", fn);

const { fullName } = Employee;
console.log("fullName", fullName); //No error declaring full name