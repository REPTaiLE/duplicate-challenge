// This is the list of numbers that will be scanned for duplicate numbers.
const listOfNums = [1, 3, 4, 2, 2];

// The main function that will be called with the listOfNums as a parameter.
const findDuplicates = arr => {
  
  const store = []; // I created a store variable to store the list of numbers that are not duplicated.
  const duplicates = []; // To this array will be added the numbers that are duplicated.

  arr.forEach((num) =>  (store.includes(num) && !duplicates.includes(num) ? duplicates.push(num) : store.push(num)));
  /* 
    We need to iterate on each of the indexes of the listOfNums, so I decided to use the forEach() method.
     Then I decided to use a ternary operator to determine wheter a duplicate number will be added in the 
     duplicates array or not.
  */
  
  return `The following duplicate numbers were found: ${duplicates}`; // Finally the duplicate numbers finded will be returned.
}

console.log(findDuplicates(listOfNums)); 