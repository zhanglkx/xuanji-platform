/**
 * 控制反转（Inversion of Control）

控制反转是一种设计原则，它通过将对象创建和管理交给外部容器，降低对象之间的耦合度，提高代码的灵活性和可扩展性。

以下面的代码为例：
 */


let container = {
    dependencies: {},
    register: function (name, instance) {
        this.dependencies[name] = instance;
    },
    resolve: function (name) {
        return this.dependencies[name];
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function Car(engine) {
    this.engine = container.resolve('engine');
}

function Engine() {
    this.start = function () {
        console.log('Engine started');
    };
}

container.register('engine', new Engine());
let car = new Car(); // 通过IoC容器实例化Car，并自动注入engine依赖  
car.engine.start(); // 'Engine started'