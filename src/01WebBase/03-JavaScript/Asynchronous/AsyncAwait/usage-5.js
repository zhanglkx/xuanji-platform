function foo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}
async function asyncFn2() {
  const num1 = await foo(1)
  console.log(num1);
  const num2 = await foo(num1)
  console.log(num2);
  const num3 = await foo(num2)
  console.log(num3);
  return num3
}
asyncFn2().then(res => console.log(res))
