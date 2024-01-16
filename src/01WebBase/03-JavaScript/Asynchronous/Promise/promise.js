let p1 = new Promise((resolve, reject) => {
  resolve("success");
  reject("fail");
});
console.log("p1", p1);
let p2 = new Promise((resolve, reject) => {
  reject("success");
  resolve("fail");
});
console.log("p2", p2);
let p3 = new Promise((resolve, reject) => {
  throw "error";
});
console.log("p3", p3);
