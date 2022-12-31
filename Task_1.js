const countNumbers = (arr) => {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] % 2 === 0 && arr[i] !== 0) {
        evenCount++;
      } else if (arr[i] !== 0) {
        oddCount++;
      } else {
        zeroCount++;
      }
    }
  }

  return { evenCount, oddCount, zeroCount };
}

const arr = [1, 2, "text", 4, 5, 0, NaN, -8, 0, {}];
const counts = countNumbers(arr);

console.log(`There are ${counts.evenCount} even elements in the array.`);
console.log(`There are ${counts.oddCount} odd elements in the array.`);
console.log(`There are ${counts.zeroCount} zero elements in the array.`);