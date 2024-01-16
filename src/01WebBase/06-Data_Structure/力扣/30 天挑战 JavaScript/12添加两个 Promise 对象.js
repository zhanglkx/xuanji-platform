/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises1 = async function(promise1, promise2) {
  let p1 = 0;
  await promise1.then(e => {
    p1 += e;
  });

  await promise2.then(e => {
    p1 += e;
  });
  return p1;
};

const addTwoPromises = async function(promise1, promise2) {
  // return await promise1 + await promise2;
  // return await Promise.all([promise1, promise2]).then(([a, b]) => a + b)
  const [a, b] = await Promise.all([promise1, promise2])
  return a + b
};

async function addTwoPromises3(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2]).then(([a, b]) => {
      resolve(a + b)
    }).catch(reject)
  })
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4



