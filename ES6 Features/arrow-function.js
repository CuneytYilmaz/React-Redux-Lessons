// function fn(param1, param2) {
//   console.log(param1);
//   console.log(param2);
// }

// fn(1, 2);

const fn = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};
fn(1, 2);

// bad
// const add = (param1,param2) => {
//     return param1 + param2;
// }

const add = (param1, param2) => param1 + param2;
console.log(add(1, 2));

const pow = param1 => param1 ** 2;
console.log(pow(3));

const fn2 = () => ({
  key1: 'value1',
  key2: 'value2',
});

console.log(JSON.stringify(fn2(), null, 2));

const fn3 = param1 => ({
  key1: param1,
  key2: 'value2',
});

console.log(JSON.stringify(fn3('value1'), null, 2));

const fn4 = (param1 = 'value', ...rest) => ({
  key1: param1,
  key2: 'value2',
  rest,
});

const result = fn4('value1', 'value2', 'value3', 'value4', 'value5');
console.log(JSON.stringify(result, null, 2));
