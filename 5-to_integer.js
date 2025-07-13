const firstArgument = process.argv[2];
const convertNumber = parseInt(firstArgument);

if (isNaN(convertNumber)) {
    console.log("Not a number");
}
else {
console.log("My number: " + convertNumber);
}


