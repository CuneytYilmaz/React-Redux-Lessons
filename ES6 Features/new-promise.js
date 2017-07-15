const asyncFn = () =>
  // eslint-disable-next-line
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron data');
    }, 3000);
  });

asyncFn()
  .then(output => output.toUpperCase())
  .then(upperCaseOutput => console.log(upperCaseOutput))
  .then(() => console.log('Sonuncu then'));

const asyncFn2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('asenkron hata');
    }, 1000);
  });

asyncFn2().then(() => console.log('Succeed')).catch(err => console.log(err));

const asyncFn3 = () =>
  // eslint-disable-next-line
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron data 2');
    }, 1000);
  });

Promise.all([asyncFn(), asyncFn3(), 'static data'])
  .then(values => console.log(values))
  .catch(values => console.log(values));
