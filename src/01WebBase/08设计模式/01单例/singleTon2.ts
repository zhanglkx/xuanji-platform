class LocalStorageLazy {
  // 静态属性 引用 LocalStotrage 类的唯一实例对象
  static localStorage: LocalStorageLazy;

  // 私有化构造器
  private constructor() {}

  // 提供一个外部可访问的的静态方法
  public static getInstance() {
    if (!this.localStorage) {
      this.localStorage = new LocalStorageLazy();
    }

    return this.localStorage;
  }

  // 实例方法
  public getItem(key: string) {
    let val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : null;
  }

  // 实例方法
  public setItem(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }
}

const instanceLazy = LocalStorageLazy.getInstance();

console.log(instanceLazy == null);

instanceLazy.setItem("instanceLazy", { "1": 1, "2": 3 });

let val = instanceLazy.getItem("instanceLazy");

console.log("instanceLazy", val);

const instance = LocalStorageLazy.getInstance();
instance.setItem("instance", { "3": 3, "4": 4 });
const value = instance.getItem("instance");
console.log("instance", value);
