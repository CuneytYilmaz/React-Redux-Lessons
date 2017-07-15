// Object.assign(target, ...sources);

const output = Object.assign(
  {},
  { key1: 'value1' },
  { key2: 'value2', key3: 'value3', key1: 'new-value' },
);
console.log(output);

// Object.assign ic ice objelerde ise yaramiyor. Bunun icin;
// const obj2 = JSON.parse(JSON.stringify(obj));
