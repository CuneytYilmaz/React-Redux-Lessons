// bad
// const helper = {
//   uppercase: string => string.toUpperCase(),
//   lowercase: string => string.toLowerCase(),
// };

// console.log(helper.lowercase('buyuk'));

const helper = {
  uppercase(string) {
    return string.toUpperCase();
  },
  lowercase(string) {
    return string.toLowerCase();
  },
};

console.log(helper.uppercase('kucuk'));
