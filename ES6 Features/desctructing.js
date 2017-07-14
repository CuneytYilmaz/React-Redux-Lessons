const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: {
    key1: 'value6',
    key2: 'value7',
  },
};

/* yanlis
 const prop1 = props.prop1;
 const prop3 = props.prop3;
*/

const { prop1, prop3, prop6: { key2: var7 } } = props;

console.log(prop1);
console.log(prop3);
console.log(var7);

const arr = [1, 2, 3];
const [var1, var2, var3, var4 = 4] = arr;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
