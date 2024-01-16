class MyPromise {
  constructor(executor) {
    this.initValue();
    this.initBind();
    executor(this.resolve, this.reject);
  }

  initValue() {
    this.PromiseResult = null;
    this.PromiseState = "pending";
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  resolve(val) {
    if (this.PromiseState !== "pending") return;
    this.PromiseResult = val;
    this.PromiseState = "fulfilled";
  }

  reject(reason) {
    if (this.PromiseState !== "pending") return;
    this.PromiseResult = reason;
    this.PromiseState = "reject";
  }
}

const test1 = new MyPromise((resolve, reject) => {
  resolve("success");
  reject("fail");
});
console.log(test1); // MyPromise { PromiseState: 'fulfilled', PromiseResult: 'success' }

// const test2 = new MyPromise((resolve, reject) => {
//   reject("fail");
// });
// console.log(test2); // MyPromise { PromiseState: 'rejected', PromiseResult: 'fail' }
