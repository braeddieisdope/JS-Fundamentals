let firstArgument = process.argv[2];

if (!firstArgument) {
    console.log("No argument");
}
else {
    console.log('Say:', firstArgument);
}