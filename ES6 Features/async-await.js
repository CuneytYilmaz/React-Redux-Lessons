const asyncFn = () =>
  // eslint-disable-next-line
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron data');
    }, 3000);
  });

const asyncFn2 = () =>
  // eslint-disable-next-line
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron data2');
    }, 1000);
  });

const asyncFn3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('asenkron error');
    }, 1000);
  });

const main = async () => {
  try {
    console.log('Start');
    const data1 = await asyncFn();
    console.log('First promise waited');
    // const data1 = await asyncFn() yerine asagidaki gibi de yazilabilir.
    // await asyncFn();

    const data2 = await asyncFn2();
    console.log('Second promise waited');

    const data3 = await asyncFn3();
    console.log(`Finished. Data1: ${data1}, Data2: ${data2}, Data3: ${data3}`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Just finished');
  }
};

main();
