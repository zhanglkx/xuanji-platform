const a = 1;
console.log(a);
const arr: [number, number, number, number, number] = [1, 2, 3, 4, 5];
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.push(999);
console.log(arr1, arr1.length);
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

/**
 * 数组求和
 * @param number
 */
function getArrSum(number: number[]) {
  console.log("==" + number);
  const total = number.reduce((prev, item) => {
    // prev += item.num * item.price
    return prev + item;
  }, 0);
  console.log(total);
  return total;
}

arr1.reduce((a, b) => a + b, 0);
const initialValue = 0;
arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(getArrSum(arr1));

const b: unknown = 0;

let aaa = 1;

if (typeof b == "number") {
  aaa = b;
}

class cls {
  number1: boolean;

  constructor(number1: boolean) {
    this.number1 = number1;
  }

  run() {
    console.log("跑起来！");
  }

  jupm() {
    console.log("跑起来！");
  }
}

const per = new cls(true);
per.run();
