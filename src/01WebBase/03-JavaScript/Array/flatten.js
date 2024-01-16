const arr = [1, [2, [3, 4]]];

const flatten = (array) => {
  let newArr = [];
  array.map((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(flatten(arr));
