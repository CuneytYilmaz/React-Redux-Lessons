const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map(item => item * 2);
console.log(newArr);

const users = [
  {
    id: '1',
    username: 'cuneyt',
  },
  {
    id: '2',
    username: 'mert',
  },
  {
    id: '3',
    username: 'musti',
  },
];

console.log(users.map(item => item.id));
console.log(users.map(item => `ID: ${item.id}, Username: ${item.username}`));
