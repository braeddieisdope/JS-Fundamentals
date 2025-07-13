
const languages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

let resultString = languages[0];

for (let i = 1; i < languages.length; i++) {
    const language = languages[i]; 
    resultString += "\n" + language; 
}

console.log(resultString);
