import {
  StringManipulationService,
  NumberManipulationService,
} from "./main-service";

class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log("word in lowercase:" + word);
    console.log("word in uppercase:" + word.toUpperCase());
    console.log("word in lowercase:" + word.toLowerCase());
    console.log("Character of second position in the word is:" + word[2]);
    console.log("Concatination:" + word.concat("Good afternoon"));
    console.log("Slicing:" + word.slice(2, 4));
    console.log("word length:" + word.length);
  }

  printWithSpace(sentence: string): void {
    console.log(sentence.split("").join(" "));
  }

  findVowel(str: string): void {
    var i: number;
    let vowels: String = "aeiou";
    let counter = 0;
    for (i = 0; i < str.length; i++) {
      if (
        str[i] == vowels[0] ||
        str[i] == vowels[1] ||
        str[i] == vowels[2] ||
        str[i] == vowels[3] ||
        str[i] == vowels[4]
      ) {
        counter++;
      }
    }
    console.log(counter);
  }
}

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    let initial: number = 2;
    let count: number = 1;
    for (let i: number = 2; i < num / 2; i++) {
      if (num % i == 0) count++;
    }
    if (count == 1) console.log("It is a prime number");
    else console.log("Number is not a prime");
  }

  findMagic(num: number): void {
    let result: number;
    do {
      result = 0;
      while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
      }
      num = result;
      console.log(result);
    } while (result > 9);
    if (result == 1) console.log("Magic number");
    else console.log("Not a Magic number");
  }
}

let sm: StringManipulationService = new StringManipulations();
sm.print("Hello");
sm.printWithSpace("Hello");
sm.findVowel("rajesh");

let nm: NumberManipulationService = new NumbersManipulations();
nm.findPrime(10);
nm.findMagic(199);
