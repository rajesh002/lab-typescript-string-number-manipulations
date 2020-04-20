"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[2]);
        console.log(word.concat("Good afternoon"));
        console.log(word.slice(2, 4));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var i;
        var vowels = "aeiou";
        var counter = 0;
        for (i = 0; i < str.length; i++) {
            if (str[i] == vowels[0] ||
                str[i] == vowels[1] ||
                str[i] == vowels[2] ||
                str[i] == vowels[3] ||
                str[i] == vowels[4]) {
                counter++;
            }
        }
        console.log(counter);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var initial = 2;
        var count = 1;
        for (var i = 2; i < num / 2; i++) {
            if (num % i == 0)
                count++;
        }
        if (count == 1)
            console.log("It is a prime number");
        else
            console.log("Number is not a prime");
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var result;
        do {
            result = 0;
            while (num > 0) {
                console.log(num);
                result += num % 10;
                num = Math.floor(num / 10);
            }
            num = result;
            console.log(result);
        } while (result > 9);
        if (result == 1)
            console.log("Magic number");
        else
            console.log("Not a Magic number");
    };
    return NumbersManipulations;
}());
var sm = new StringManipulations();
sm.print("Hello");
sm.printWithSpace("Hello");
sm.findVowel("rajesh");
var nm = new NumbersManipulations();
nm.findPrime(10);
nm.findMagic(191);
