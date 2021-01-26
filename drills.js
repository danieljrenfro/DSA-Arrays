// 5. URLify a string
// When there are spaces in a URL, turn them into %20.
function urlifyString(string) {
  let stringArr = [];
  for (let i = 0; i < string.length; i++) {
    stringArr.push(string[i]);
  }

  let urlifiedString = '';
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === ' ') {
      urlifiedString += '%20';
    } else {
      urlifiedString += stringArr[i];
    }
  }

  return urlifiedString;
}

/*
console.log(urlifyString('')); // ''
console.log(urlifyString('www.thinkful.com')); // 'www.thinkful.com'
console.log(urlifyString('www.thinkful.com daniel renfro')); // 'www.thinkful.com%20daniel%20renfro'
*/

// This function has a time complexity of O(n) for the best, avg, worst case.

// 6. Filtering an array
// Removed numbers from an array that are less than 5. 
function removeLessThan5(arr) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

/*
console.log(removeLessThan5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [5, 6, 7, 8, 9, 10]
console.log(removeLessThan5([1, 5, 2, 6, 3, 7, 4, 8, 10, 9])); // [5, 6, 7, 8, 10, 9]
console.log(removeLessThan5([])); // []
*/

// This algorithm has a time complexity of O(n) for best, average, worst case.

// 7. Max sum in the array
// Sums all numbers in an array.
function sum(arr) {
  let sumTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumTotal += arr[i];
  }

  return sumTotal;
}

/*
console.log(sum([]));
console.log(sum([0, 0])); // 0
console.log(sum([5, 6])); // 11
console.log(sum([-5, -6, -10])); // -21
console.log(sum([-5, 6])); // 1
*/

// 8. Merge arrays
// Returns a single array that is sorted.
function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  while (arr1.length + arr2.length !== 0) {
    if (arr1.length === 0 && arr2.length !== 0) {
      mergedArray = [...mergedArray, ...arr2];
      arr2 = [];
    }

    if (arr2.length === 0 && arr1.length !== 0) {
      mergedArray = [...mergedArray, ...arr1];
      arr1 = [];
    }
    
    if (arr1.length && arr2.length && arr1[0] < arr2[0]) {
      mergedArray.push(arr1.shift());
    } else if (arr1.length && arr2.length && arr2[0] < arr1[0]) {
      mergedArray.push(arr2.shift());
    }
  }

  return mergedArray;
}

/*
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([1, 2, 3, 4, 5, 6], [])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([], [1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([-3, -2, -1], [-6, -5, -4])); // [-6, -5, -4, -3, -2, -1]
console.log(mergeArrays([-3, -2, -1], [0, 1, 2])); // [-3, -2, -1, 0, 1, 2]
*/