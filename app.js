// --------------------(Chapter 21 Changing Case)------------------------

//                           Exerxise no 1

// var allLower = "HASAN TANVEER";

// allLower = allLower.toLowerCase();
// console.log(allLower);

//                           Exerxise no 2

// var x = "PAKISTAN";
// x = x.toLowerCase();

// console.log(x);

//                           Exerxise no 3

// var y = "pakistan";
// y = y.toUpperCase();

// console.log(y);

//                          Exerxise no 4

// var a = "THIS WILL BE IN LOWER CASE";
// var b = a.toLowerCase();

// console.log(b);

//                          Exerxise no 5

// var c = ["THIS WILL BE IN LOWER CASE IN ARRAY"];
// var d = c[0].toLowerCase();

// console.log(d);

//                          Exerxise no 6

// var e = "this will be in upper case in alert";

// alert(e.toUpperCase());

//                           Exerxise no 7

// var cityName = "kaRacHi";
// var firstLetter = cityName.slice(0, 1).toUpperCase();
// var otherwords = cityName.slice(1).toLowerCase();
// console.log(firstLetter + otherwords);


//--------------------------Chapter 22 - 25 (Strings)


//                            Exercise no 1

// var sameWords = "captain";
// sameWords = sameWords.slice(1, 3);

// console.log(sameWords);

//                            Exercise no 2

// var char = "Karachi";
// var numOfChar = char.length;

// console.log(numOfChar);

//                           Exercise no 3

// var animal = "elephant";
// var seg = animal.slice(2, 6);

// console.log(seg);

//                             Exercise no 4

// var char1 = "Pakistan";
// var numOfChar1 = char1.length;

// console.log(numOfChar1);

//                            Exercise no 5

// var firstVar = "Karachi";
// var slicedVar1 = firstVar.slice(0, 1);
// var slicedVar2 = firstVar.slice(4);

// var plusSliced = slicedVar1 + slicedVar2;

// console.log(plusSliced);

//                           Exercise no 6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// console.log(indx);

//                           Exercise no 7

// var text2 = "To be or not to be.";
// var indx2 = text2.lastIndexOf("be");

// console.log(indx2);

//                            Exercise no 8

// var findIndex = "go to University or go home";
// var secIndex = findIndex.lastIndexOf("go");

// console.log(secIndex);

//                             Exercise no 9

// var str = ["Apple", "Orange", "Banana"];
// var check = str.indexOf("Orange");
// if (check > -1) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//                            Exercise no 10

// var alphabets = "abcde";
// alphabets = alphabets.charAt(2);

// console.log(alphabets);

// c is in index 2

//                            Exercise no 11

// var cha = "abcdefghihkl";
// var char10 = cha.charAt(10);

// console.log(char10);

//                            Exercise no 12

// var alphabet = "abcdefghijklmnopqrst";

// var lastChar = alphabet.charAt(alphabet.length - 1);

// console.log(lastChar);

//                            Exercise no 13

// var input = "abcdefghijklmnopqrst";

// var cha = input.charAt(4);

// console.log(cha);

//                            Exercise no 14

// var alphabetics = "Ammad";
// var char3 = alphabetics.charAt(3);

// if (alphabetics.charAt(3) == char3) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//                            Exercise no 15

// var myName = "Hasan";

// for (var i = 0; i < myName.length; i++) {
//     var loops = [];
//   loops[0] = myName[i];
//   console.log(loops);
// }

// var myName = "Hasan";
// var loops = [];

// for (var i = 0; i < myName.length; i++) {
//   loops[i] = myName[i];
//   console.log(loops);
// }

// var abc = "abc";
// var a = [];
// a[0] = avc[i];

//                              Exercise no 16

// var reply = "no";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);


//                             Exercise no 17 

// var y = x.replaceAll("a", "z");



//--------------------------Chapter 27 (Random Numbers)-------------------

//                           Exercise no 1

//  var randomNumber = Math.random();
// var convertedNumber = Math.floor(randomNumber * 50) + 1;

// console.log(convertedNumber);

//                           Exercise no 2 

// var randomNumber = Math.random();
// console.log(randomNumber);

//                           Exercise no 3

// var diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll);

//                           Exercise no 4 

// var coinToss = Math.random();
// var result = coinToss < 0.5 ? "heads" : "tails";

// console.log(result);


//---------------------Chapter 28, 29 (Converting Strings)---------------

//                         Exercise no 1

// var str = "42";
// var num = parseInt(str);

// console.log(num); 
                         
//                         Exercise no 2

// function convertStringToInteger(str) {
//     var num = parseInt(str);
//     return num;
//   } 
//   var stringNumber = "123";
//   var convertedNumber = convertStringToInteger(stringNumber);

//   console.log(convertedNumber); 
  
//                         Exercise no 3

// var str = "3.14";
// var num = parseFloat(str);

// console.log(num);

//                         Exercise no 4

// function canConvertToNumber(str) {
//     return !isNaN(str);
//   } 
//   var stringNumber = "123";
//   var canConvert = canConvertToNumber(stringNumber);
  
//   console.log(canConvert); 
  
//                         Exercise no 5

// var number = 42;
// var str = number.toString();

// console.log(str); 

//                         Exercise no 6

// function convertNumberToString(num) {
//     var str = num.toString();
//     return str;
//   }  
//   var number = 42;
//   var convertedString = convertNumberToString(number);
  
//   console.log(convertedString); 
  
//                         Exercise no 7

// var decimalString = "3.14";
// var integerNumber = parseInt(decimalString);

// console.log(integerNumber); 


//----------------------Chapter 30 (Controlling the length of decimals)------------


//                           Exercise no 1

// var num = 3.14159265359;
// var newNum = Number(num.toFixed(4)).toString();

// console.log(newNum); 

//                           Exercise no 2

// var num = 3.14159265359;
// num = Number(num.toFixed(2));

// console.log(num); 

//                           Exercise no 3

// var num = 3.14159265359;
// if (num.toFixed(2).toString().length > 4) {
// } else {
//   console.log("Number has 4 characters or fewer");
// }

//                           Exercise no 4

// var number = 3.14159265359;

// var roundedString = number.toFixed(2).toString();
// alert(roundedString);


//-----------------------Chapter 31 - 34 (Date & Time)------------------

 //                           Exercise no 1

// var dObj = new Date();

 //                           Exercise no 2

// var dStr = new Date().toString();

  //                          Exercise no 3

//var day = d.getDay();

 //                           Exercise no 4

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[d]);

 //                           Exercise no 5
// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();

 //                           Exercise no 6
//  var later = new Date(2020, 11, 0);

 //                           Exercise no 7
 //var dateObj = new Date(1992, 1, 2);

 //                           Exercise no 8
 //alert(new Date(1980, 0, 1).getTime());

 //                           Exercise no 9
//  var dateObj = new Date(); 

//  dateObj.setFullYear(2023);
 
//  console.log(dateObj); 
 
//--------------------------Chapter 35 - 37 (Functions)--------------

//                           Exercise no 1

// function displayAlert() {
//     alert("This is Function Alert");
//   }
//   displayAlert();
  
//                          Exercise no 2
  
//   function askName() {
//     var name = prompt("Enter name");
//     console.log(name);
//   }
// askName();
  
//                          Exercise no 3
  
//   function callTwoFunctions() {
//     firstFunction();
  
//     secondFunction();
//   }
  
//                          Exercise no 4
  
//   function askName1() {
//     alert(prompt("Enter name"));
//   }
//   askName1();
  
//                           Exercise no 5
  
//   var variable = 42;
//   var string = "Hello";
//   var number = 7;
  
//   function concat(a, b, c) {
//     console.log(variable, string, number);
//   }
  
//   concat(variable, string, number);
  
//                           Exercise no 6
  
//   function concatenate(param1, param2) {
//     var result = param1 + param2;
//     console.log("Concatenated result: " + result);
//   }
  
//   concatenate("Hello", " World!");
  
//                           Exercise no 7
  
//   function multiply(param1, param2, param3) {
//     var result = param1 * param2 * param3;
//     console.log("Multiplication result: " + result);
//   }
  
//   multiply(2, 3, 4);
  
//                           Exercise no 8
  
//   var numbers = [4, 7, 10, 15, 2];
//   var average = calculateAverage(numbers);
  
//   function calculateAverage(numbers) {
//     var sum = 0;
//     var count = numbers.length;
  
//     for (var i = 0; i < count; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / count;
//     return average;
//   }
//   console.log(average);
   
//                           Exercise no 9
  
//   function calculateSum(param1, param2) {
//     var sum = param1 + param2;
//     return sum;
//   }
  
//   var result = calculateSum(3, 7);
//   console.log(result);
  
//                           Exercise no 10
  
  // Same Question no 8
  
//                           Exercise no 11
  
//   function calculateSum1(param1, param2) {
//     var sum = param1 + param2;
//     return sum;
//   }
  
//   var result = calculateSum1(3, 7);
//   console.log(result);
  
//                           Exercise no 12
  
//   function countLetters(word) {
//     var letterCounts = {};
  
//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i];
  
//       if (letterCounts[letter]) {
//         letterCounts[letter]++;
//       } else {
//         letterCounts[letter] = 1;
//       }
//     }
  
//     return letterCounts;
//   }
  
//   var word = "hello";
//   var counts = countLetters(word);
//   console.log(counts);
  
//                           Exercise no 13
  
//   var date = new Date();
//   function setYear(year) {
//     date.setFullYear(year);
//     console.log(date);
//   }
  
//   setYear(2003);

//                           Exercise no 14
  
//   function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
  
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
//     var dayDiff = today.getDate() - birthDate.getDate();
  
//     if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var dateOfBirth = "1999-08-07";
//   var age = calculateAge(dateOfBirth);
//   console.log("Age: " + age);

//                           Exercise no 15
  
//   var array = [
//     "zaid",
//     "haris",
//     "raza",
//     "abubakar",
//     "hassan",
//     "hussain",
//     "fatima",
//   ];
//   var wordToSearch = "hassan";
//   function checkWordPresence(word, array) {
//     return array.includes(word);
//   }
//   var isPresent = checkWordPresence(wordToSearch, array);
//   console.log(isPresent);
  
//   // Exercise no 16
  
//   function repeatLetter(letter, times) {
//     return letter.repeat(times);
//   }
  
//   var letter = "abcd";
//   var repeatedLetter = repeatLetter(letter, 10);
//   console.log(repeatedLetter);
  
//   // Exercise no 17
  
//   function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   var array = ["a", "b", "c", "d", "e"];
//   var reversedArray = reverseArray(array);
//   console.log(reversedArray)
























 //-----------------------(Chapter 38 Local vs. Global Variables)---------------

// Exercise no 1

// function calculateSum() {
//   var result = var1 + var2;

  //These are local Variables
// }

// Exercise no 2

// var globalVariable = "this is global variable";

// function accessGlobalVariable() {
//   console.log(globalVariable);
// }

// accessGlobalVariable();

// ---------------------(Chapter 39-40 Switch Statements)-----------------

                              // Exercise no 1

// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Selected fruit: Apple");
//     break;
//   case "banana":
//     console.log("Selected fruit: Banana");
//     break;
//   case "orange":
//     console.log("Selected fruit: Orange");
//     break;
//   default:
//     console.log("Selected fruit: Unknown");
//     break;
// }

//                   Exercise no 2

// var cityName = prompt("Enter a city name:");
// var message;

// switch (cityName) {
//   case "Karachi":
//     message = "You entered Karachi!";
//     alert(message);
//     break;
//   case "Lahore":
//     message = "You entered Lahore!";
//     alert(message);
//     break;
//   case "Islamabad":
//     message = "You entered Islamabad!";
//     alert(message);
//     break;
//   default:
//     message = "City not recognized!";
//     alert(message);
//     break;
// }