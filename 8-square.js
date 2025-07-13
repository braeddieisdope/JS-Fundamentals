const arg = process.argv[2];

const size = parseInt(arg);

if (isNaN(size)) {
    console.log("Missing size");
    process.exit(0);
}

if (size <= 0) {
    process.exit(0);
}

const rowOfXs = 'X'.repeat(size);

let squareOutput = rowOfXs;

let i = 1;
while (i < size) {
    squareOutput += "\n" + rowOfXs;
    i++;
}
console.log(squareOutput);
