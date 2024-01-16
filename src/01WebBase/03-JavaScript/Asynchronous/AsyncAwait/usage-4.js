class TaskPro {
  constructor() {
    this._taskList = [];
    this._isRunning = false;
    this._currentIndex = 0;
    //调用下一个中间件
    this._next = async () => {
      this._currentIndex++;
      await this._runTask();
    };
  }

  addTask(task) {
    this._taskList.push(task);
  }

  run() {
    if (this._isRunning || !this._taskList.length) {
      return;
    }
    this._isRunning = true;
    //将任务取出来运行
    this._runTask();
  }

  async _runTask() {
    if (this._currentIndex >= this._taskList.length) {
      //任务完成
      this._reset();
      return;
    }
    const task = this._taskList[this._currentIndex];
    let i = this._currentIndex;
    await task(this._next);
    let j = this._currentIndex;
    //如果没有调用next，就任务完成后自行调用
    if (i === j) {
      await this._next();
    }
  }

  _reset() {
    this._currentIndex = 0;
    this._isRunning = false;
    this._taskList = [];
  }
}

//调用

const t = new TaskPro();

t.addTask(async (next) => {
  console.log("1 start");
  await next();
  console.log("1 end");
});

t.addTask(() => {
  console.log("2");
});

t.addTask(() => {
  console.log("3");
});
t.run();
