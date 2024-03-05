/**** Exercise #1 ****/

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  // 3 + n + n + n + n
  // BIG O(3 + 4n)
  // O(n)

/**** Exercise #2 ****/
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n) 
    }
    let whoAmI = "I don't know"; // O(1)
  }
  // Big O = 4 + 7n = O(n)



  // Given 2 arrays, create a function that let's a user
  // know (true/false) whether these two arrays contain any
  // common items

  // For example:
  const sampleArray1 = ['a', 'b', 'c', 'x'];
  const sampleArray2 = ['z','y', 'i'];

  // should return false.
  // ----------------------------------------
  const sampleArray3 = ['a', 'b', 'c', 'x'];
  const sampleArray4 = ['z','y', 'x'];

  // should return true.

  // ----------------------------------------

  // Solution #1 (Naive/Brute Force Approach)

  function hasCommonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
      for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  // This solution would not be efficient because it has a nested loop,
  // which results in a Big O time complexity of O(a * b).
  
  // Solution #2
  // Convert Array to object for comparison.

  // arr1 ==> obj {
  // a: true,
  // b: true,
  // c: true,
  // x: true
  // }

  // arr2[index] === obj.properties

  function hasCommonItems2(arr1, arr2) {
    // loop through first array and create object where
    // properties === items in the array.
    let arrObj = {};
    for(let i = 0; i < arr1.length; i++) {
      // check to see if a property exists
      if(!arrObj[arr1[i]]) {
        // store the value in a variable
        const item = arr1[i];
        // assign the value as the key, and the property as true
        arrObj[item] = true;
      }
    }

    // loop through the second array and check if
    // item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++){
      // if the object has a property that matches the value
      // of arr2 at the index of j, return true
      if (arrObj[arr2[j]]) {
        return true;
      }
    }
    return false
  }

  // Big O time complexity is O(a + b)

  // Solution #3
  function hasCommonItems3 (arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }

  // This solution is a more readable solution, that uses ES6.