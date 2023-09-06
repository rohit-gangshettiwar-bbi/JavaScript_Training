const massMark = 98;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);


/* Write your code below. Good luck! 🙂 */
if(BMIJohn<BMIMark){
    console.log(`MarK's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`)
}