const arr = [1, 2, 3, 4, 5];
console.log(...arr);

const [arr1, arr2, ...rest] = arr;
console.log(arr1);
console.log(arr2);
console.log(rest);

console.log(...rest);
