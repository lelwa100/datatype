let courses = ["Html" , "Css" , "JavaScript" , "React"];

// push method add element at the end of the array 
courses.push("TypeScript");

//unshift add element at the begging of the array
courses.unshift("NodeJs");

//pop is usedo remove element at the end of the array
courses.pop("TypeScript");

//shift remove element at the beggining of the array
courses.shirt ("Nc")

let total = courses.length;
let convertor = courses. toString();
let caps = convertor.toUpperCase();

//we are creating  a list of strings with variable convertor
let smalls= convertor.toLowerCase();

// all this method became available to string library
console.log(`Elements inside array courses array ${courses}`);
console.log(`Elements of items in a array is  ${total}`);

//using join method to separate elements '|'
let separator = courses.join ('|');
console.log(`separated elements ${separator}`)

console.log(`This is array became  a list of  strings ${convertor}`);
console.log(`Testing if string can call uppercase ${caps}`);
console.log(`Testing if string can be a lowercase ${smalls}`);

let student= {
    firstName : "Smurfs",
    secondName : "Cekiso",
    stipend : 6000
}
// the value  will return true if it was able to deleteor false if it was
console.log (delete student.stipend);
console.log (student);
console.log (student.firstName,student.secondName);

