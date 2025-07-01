// تعیین زوج یا فرد بودن عدد
// var number = prompt("Enter a Number: ");
// var rem = number % 2;
// if (rem == 0) {
//   console.log("عدد زوج است");
// }

// if (rem == 1) {
//   console.log("عدد فرد است");
// }

// محاسبه میانگین
// var math = Number(prompt("Enter a score of math: "));
// var physic = +prompt("Enter a score of physic: ");
// var chemistry = +prompt("Enter a score of chemistry: ");

// var avg = (math + physic + chemistry) / 3;

// if (avg >= 18) {
//   console.log("congratulation!!");
// }

// کتابخانه math
// pi=3.1415
// console.log(Math.PI);
// console.log(Math.max(12, 4, -9, 9.54, 43, 7));
// console.log(Math.min(12, 4, -9, 9.54, 43, 7));
// var num = Math.PI * 2;
// console.log(Math.sqrt(15));
// console.log(Math.abs(95));
// console.log(Math.round(5.841));
// console.log(Math.floor(5.999));
// console.log(Math.pow(2,3));
// console.log(Math.random());

// عدد تصادفی کمتر از عدد دلخواه
// var num = Number(prompt("Enter a Number: "));
// var randNumber = Math.floor(Math.random() * num);
// console.log(randNumber);

// محاسبه باقیمانده تقسیم
// var num1 = Number(prompt("Enter a Number1: "));
// var num2 = Number(prompt("Enter a Number2: "));

// var reminder = num1 - Math.floor(num1 / num2) * num2;
// console.log(reminder);

// ELSE IF
// if (condition) {

// }
// else{

// }

// جابجایی دو متغیر
// var a = 19,
//   b = 17;

// console.log(`a=${a}   b=${b}`);

// var c = a;
// a = b;
// b=c;

// console.log(`a=${a}   b=${b}`);

// مقلوب عدد دو رقمی
var num = Number(prompt("Enter a Number: "));
var dahgan = Math.floor(num / 10);
var yekan = num % 10;
var adadJadid = yekan * 10 + dahgan;
console.log("adad jadid= ", adadJadid);
