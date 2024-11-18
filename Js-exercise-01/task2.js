// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var Mathematics = 75.25;
var Biology = 75;
var Chemistry = 80;
var Physics = 80;
var English = 90;

var totalMarks = Mathematics + Biology + Chemistry + Physics + English;
var averageMarks = totalMarks / 5;
console.log(totalMarks);
console.log(averageMarks.toFixed(2));
