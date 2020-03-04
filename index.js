//STRING METHODS
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

console.log(variable.replace("p","i"))
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



//NUMBER METHODS

let num=3.33;
console.log(num.toFixed(1))
//converts to fixed numbers
//output:3.3

console.log(num.toString())
//converts to string
//output:3.33

console.log(num.toExponential())
//converts to exponential values
//output:3.33e+0




//GLOBAL METHODS
let num=3.33;

//console methods
console.log("Hello")
//display in console
//output:Hello

console.info("hello")
//console message 
//output:hello

console.warn("hi")
//display as warning
//output:hi-yellow color

console.error("error")
//display as error msg
//output:error in red color

console.table(["a", "b", "c"]);
//creates table

//alert("hello")
//gives an alert message
//output:hello

//console.log(prompt())
//displays a dialog box that prompts input
//output: entereed value

//confirm("Press a button!")
//displays a dialog box with a specified message
//output:Press a button!

console.log(Number("a"))
//converts to numeric
//output:NaN

console.log(isNaN(num))
//checks for Not an Number 
//output:false

console.log(parseFloat(3e+2))
//converts to float values
//output:300

console.log(parseInt(4.4))
//converts to integer values
//output:4

console.log(typeof(String(3)))
//converts to string
//o/p:string

console.log(Boolean(null))
//returns true if contains value else 0
//output:false

