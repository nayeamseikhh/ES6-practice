let price = 50;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

//

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html);

//

const firstName ="justin";
const lastName = "biber";
const fullName = `${firstName} ${lastName} is a good boy.`;
console.log(fullName);

//

const Love = `I love you
I miss you
I haugh you
I kiss you
I need you 
Please come to me 
I never forget you.`
console.log(Love);

//

const numberWithVat = `${10 + 22} ${ 10 * 5414 } ${ 404 / 2 }`;
console.log(numberWithVat);