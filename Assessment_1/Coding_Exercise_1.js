const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIJohn = massJohn / (heightJohn * heightJohn);
let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI, "Mark has higher BMI than John");
