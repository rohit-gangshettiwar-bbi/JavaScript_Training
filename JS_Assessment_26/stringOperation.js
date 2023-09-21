class StringManipulator {

  constructor(inputString) {

    this.inputString = inputString;

  }

  reverseAndCapitalize() {

    const reversed = this.inputString.split('').reverse().join('');

    return reversed.charAt(0).toUpperCase() + reversed.slice(1);

  }

  countVowels() {

    const vowelCount = this.inputString.split('').reduce((count, char) => {

      if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {

        return count + 1;

      }

      return count;

    }, 0);

    return vowelCount;

  }
  isPalindrome() {

    const reversed = this.inputString.split('').reverse().join('');

    return this.inputString.toLowerCase() === reversed.toLowerCase();

  }

 

  replaceEWithX() {

    return this.inputString.replace(/e/g, 'X');

  }

 

  manipulateString() {

    const reversedAndCapitalized = this.reverseAndCapitalize();

    const vowelCount = this.countVowels();

    const palindrome = this.isPalindrome();

    const replacedString = this.replaceEWithX();

 

    return {

      reversedAndCapitalized,

      vowelCount,

      isPalindrome: palindrome,

      replacedString,

    };

  }

}



const input = "level";

const manipulator = new StringManipulator(input);

const result = manipulator.manipulateString();

console.log(result);

