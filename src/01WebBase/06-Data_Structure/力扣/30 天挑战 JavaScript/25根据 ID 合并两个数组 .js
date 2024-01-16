/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  const map = new Map();
  arr1.forEach(item => {
    if (map.has(item.id)) {
      map.set(item.id, Object.assign(map.get(item.id), item));
    } else {
      map.set(item.id, item);
    }
  });
  return [...map.values()].sort(((a, b) => a.id - b.id));
};

// let arr1 = [
//   { "id": 1, "x": 1 },
//   { "id": 2, "x": 9 }
// ];
// let arr2 = [{ "id": 3, "x": 5 }];

let arr1 = [
  { "id": 1, "x": 2, "y": 3 },
  { "id": 2, "x": 3, "y": 6 }
];
let arr2 = [
  { "id": 2, "x": 10, "y": 20 },
  { "id": 3, "x": 0, "y": 0 }
];

console.log(join(arr1, arr2));
