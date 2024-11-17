// exercise 12
// question 1

// let value = prompt("enter value");
// if (value > 'A' && value<'z') ;{console.log("this is uper case")}

// question 2
function value (a,b){
    if(a>b){ console.log("a is bigger");
    }
}

// quesyion 3
// let num = prompt("Enter a number: ");
// num = parseInt(num);

// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }


// question 4
// function isVowel(value) {
//     value = value.toLowerCase();
//     return ['a', 'e', 'i', 'o', 'u'].includes(char);
//   }
  
//   let char = prompt("Enter a character: ");
  
//   if (value.length === 1) {
//     console.log(isVowel(value));
//   } else {
//     console.log("Please enter a single character.");
//   }

// question 5
// Function to validate password
// function validatePassword() {
//     let userInput = prompt("Enter your password: ");
  
//     // Check if user has entered password
//     if (userInput === null || userInput.length === 0) {
//       alert("Please enter your password");
//       validatePassword(); // recursive call
//     } 
//     // Check if both passwords are same
//     else if (userInput === correctPassword) {
//       alert("Correct! The password you entered matches the original password");
//     } 
//     else {
//       alert("Incorrect password");
//       validatePassword(); // recursive call
//     }
//   }



// question 7

// let time = prompt("Enter time in 24-hour format (HHMM):");

// let hours = parseInt(time.substring(0, 2));
// let minutes = parseInt(time.substring(2, 4));

// if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
//   alert("Invalid time");
// } 
// else if (hours < 12 && minutes >= 0) {
//   if (hours === 0) {
//     alert(`12:${minutes.toString().padStart(2, '0')} AM`);
//   } 
//   else {
//     alert(`${hours}:${minutes.toString().padStart(2, '0')} AM`);
//   }
// } 
// else if (hours === 12 && minutes >= 0) {
//   alert(`12:${minutes.toString().padStart(2, '0')} PM`);
// } 
// else {
//   let newHours = hours - 12;
//   alert(`${newHours}:${minutes.toString().padStart(2, '0')} PM`);
// }
// chapter 13 to 14

// 1
// let studentNames = [];
// 2

// let students = [];
// students.push("ali");
// students.push("hassn");
// students.push("babar");

// console.log(students);
// 3 
// let stringsArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


// 5

// let  boolean = [true, false, true, false, true];

//   4
// let num = [1, 2, 3, 4, 5];


// 6
// let mixedArray = [1, "hello", true, 3.14, null, undefined, [1, 2, 3], {name: "ali"}];

// 7
//  "PhD (Doctor of Philosophy)"
//  let qualifications = ["SSC ", "HSC ","BCS", "BS ", "BCOM ","MS ","M. Phil. ", "PhD " ];
  
//   document.write("<ul>");
//   qualifications.forEach((qualification) => {
//     document.write(`<li>${qualification}</li>`);
//   });
//   document.write("</ul>");


// 8
// let studentNames = ["Ali", "Hassan", "Hadi"];

// let studentScores = [320, 230, 480];

// let totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (studentScores[i] / totalMarks) * 100;
//   console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. ${percentage.toFixed(2)}%`);
// }

// 10

// let studentScores = [320, 230, 480, 120];

// studentScores.sort((a, b) => a - b);

// console.log("Sorted Scores:");
// console.log(studentScores);
// 11

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];

// let selectedCities = ["Islamabad"];

// selectedCities.pus;h(cities[0], cities[3]);

// console.log("Selected Cities:");
// console.log(selectedCities)

// 12

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// console.log("Array: [" + arr + "]");
// console.log("String: " + str)


// 13

// Create a new array
// let deviceitem = [];

// // Store values in the array (FIFO order)
// deviceitem.push("Keyboard");
// deviceitem.push("Mouse");
// deviceitem.push("Monitor");
// deviceitem.push("Printer");

// console.log("deviceitem" );

// // Access values in the order they were stored (FIFO)
// while (deviceitem.length > 0) {
//   let device = deviceitem.shift();
//   console.log("Out:", device);
// }


// 15

// let fifoArray = [];

// fifoArray.push("Apple");
// fifoArray.push("Samsung");
// fifoArray.push("Motorola");
// fifoArray.push("Nokia");
// fifoArray.push("Sony");
// fifoArray.push("Haier");

// console.log("FIFO Array:", fifoArray);


// while (fifoArray.length > 0) {
//   let value = fifoArray.shift();
//   console.log("Out:", value);
// }





