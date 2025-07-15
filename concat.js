//concatenate method is used to combine or join two or more aarys into one

let intro = [ "HMTl", "CSS", "JS"];
let basics = ["problem sloving" , "coding" , "GiT"];
let fundamental = ["algorithms", "functions", "logics"];
let cs= intro.concat(basics, fundamental)
console.log(cs)

//fat method we use it to reduce nesting in an array its also called to fatten thw array

let courses = [[ "HMTl", "CSS", "JS"],
["problem sloving" , "coding" , "GiT"],
["algorithms", "functions", "logics"]
 ]
 
 console.log (courses)
 let subject = courses.flat (Infinity)
 console.log (subject)