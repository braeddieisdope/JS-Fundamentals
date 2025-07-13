const arg = process.argv[2];
const x = parseInt(arg);
if (isNaN(x)) { // This is the first allowed console.log
    console.log("Missing number of occurrences");
    process.exit(0); // Terminate script
}
if (x <= 0) {
    process.exit(0); // Terminate script without printing anything
}
let outputString = "C is fun";
let i = 1;
while (i < x) {
    outputString += "\nC is fun";
    i++;
}
console.log(outputString);
