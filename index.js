let variable= "priya";

console.log(variable.length)
// length of the string
//output:5

console.log(variable.concat("lmp"))
//joins 2 string  //${a} ${b}-->concats
//output:priyalmp

console.log(variable.endsWith("a"))
//checks the string ends with a or not
//output:true

console.log(variable.includes("r"))
//checks the string contains r or not
//output:true

console.log(variable.indexOf("i"))
//returns index
//output:2

console.log(variable.lastIndexOf("i"))
//returns last index of í'
//output:2

console.log(variable.repeat(2))
//repeat values
//output:priyapriya

console.log(variable.replace(/[pr]/g,"i"))
//replaces the letter
//output:rriya

console.log(variable.search("i"))
//return index of letter
//output:2

console.log(variable.slice(0,2))
//returns the slice of string
//output:pr

console.log(variable.split("i"))
//returns splitted string
//output:["pr", "ya"]

console.log(variable.startsWith("p"))
//checks the string starts with p or not
//output:true

console.log(variable.substr(2,5))
//returns a substring from index 2to 5
//output:iya

console.log(variable.toLowerCase())
//converts to lowercase
//output:priya

console.log(variable.toUpperCase())
//converts to toUpperCase
//output:PRIYA

console.log(variable.trim())
//ignore space
//output:priya


