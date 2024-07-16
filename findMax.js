function findMax(arr) {
    if (arr.length === 0) {
      return null;
    }
    return Math.max(...arr);
  }
  
  // Example usage:
  const numbers = [10, 5, 8, 20, 3];
  console.log(findMax(numbers)); // Output: 20
  
  const emptyArray = [];
  console.log(findMax(emptyArray)); // Output: null
  