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

const user = users.find(item => item.username === 'cuneyt');
console.log(user);
