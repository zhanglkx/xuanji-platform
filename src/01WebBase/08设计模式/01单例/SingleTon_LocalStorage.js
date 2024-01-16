class SingleTon {
     static getInstance() {
        if (!SingleTon.instance) { //这里使用SingleTon.instance和this.instance是一样的，因为使用后者的话，getInstance由SingleTon调用，this 也会等于SingleTon
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    }

    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }
}

let example1 = SingleTon.getInstance();
let example2 = SingleTon.getInstance();
console.log(example1 === example2);

example1.setItem('name', 'zhangsan');
example1.setItem('age', 18);
console.log(example2.getItem('name')); //zhangsan