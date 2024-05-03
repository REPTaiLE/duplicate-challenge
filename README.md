# Duplicate Challenge

In this challenge we are going to evaluate an array of numbers and determine wheter duplicate numbers are found in the array or not. 
The following code is written in JavaScript, then if you want to execute the code you must have <a href="https://nodejs.org/en">NodeJS</a> installed. So, if you doesn't have NodeJS installed yet you must install it first.

<br />

## Explanation

First, we need to look at the entire code in order to destructure it and undestard how I solve the problem:
```
const listOfNums = [1, 3, 4, 2, 2];

const findDuplicates = arr => {
  
  const store = []; 
  const duplicates = []; 

  arr.forEach((num) =>  (store.includes(num) && !duplicates.includes(num) ? duplicates.push(num) : store.push(num)));
  
  return `The following duplicate numbers were found: ${duplicates}`; 
}

console.log(findDuplicates(listOfNums));
```

### 1. List of numbers
At the top, a list of numbers is given:
```
const listOfNums = [1, 3, 4, 2, 2];
``` 

### 2. Function declaration
Then we declare the main function that will be returning a list of finded duplicate numbers:
```
const findDuplicates = arr => {}
```

### 3. Inside the function I declared two variables containing an empty array.
```
const store = []; // All the numbers.
const duplicates = []; // All the duplicate numbers.
```

### 4. Determine whether a number is duplicated or not.
```
arr.forEach((num) =>  (store.includes(num) && !duplicates.includes(num) ? duplicates.push(num) : store.push(num)));
```
First, the forEach() method will iterate on every index of the listOfNums. Then a ternary operator comes in to evaluate whether a number is duplicated or not. The condition to evaluate is if a number of the listOfNums exists on the store variable and if the duplicate variable doesn't have that num. If true, the number will be pushed to the duplicates variable. If false, the num will be pushed to the store variable.

### 5. The return statement
Once each index of the listOfNums has been evaluated and added to the corresponding variable, the function will return the repeated number stored on the duplicates variable:

```
return `The following duplicate numbers were found: ${duplicates}`;
```

### 6. Finally we call the function with the list of duplicates as parameter:
```
console.log(findDuplicates(listOfNums));
```

<br />
<br />

**Happy Coding!** <img src="https://raw.githubusercontent.com/REPTaiLE/Thunder-Focus/main/thunder-focus/images/white-laptop.png" alt="White Laptop" width="40px" height="30px" align="center">
