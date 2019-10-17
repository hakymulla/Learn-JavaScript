// Javascript arrays can take any values in the same array
// We don't have to specify the size
const a = ["hii", 26, "Swapnil"];

console.log(a);
// Output [ 'hii', 26, 'Swapnil' ]
console.log(a.length); // This will print the size of array
// Output 3

const Student = []; // Created Empty array

// Here we are pushing one by one element
Student.push("Swapnil Satish Shinde"); // Pushed the Name

Student.push(76); // Pushed rollno

Student.push(true); // Pushed true

console.log(Student); // Print Whole array
// Output [ 'Swapnil Satish Shinde', 76, true ]

const easyMethod = []; // Created Empty array

easyMethod.push("Swapnil Satish Shinde", 76, true); // This way you can push Multiple Values at once.

console.log(easyMethod);
// Output [ 'Swapnil Satish Shinde', 76, true ]

const b = ["hii", 26, "london"];
a.pop();   // Removes the last element ("london") from b
//Output ["hiii",26];
// The pop() method returns the value that was "popped out":

const b = ["hii", 26, "london"];
a.shift(); // Removes the first element "hii" from b
//Output [26,"london"];
//The shift() method returns the string that was "shifted out":

const b = ["hii", 26, "london"];
b.length
//Output 3
// The length calls out the total numbers of collections in the array

const b = ["hii", 26, "london"];
delete b[0]
//output true
// Deleting elements leaves undefined holes in an array






