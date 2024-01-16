/*
 * Dependency Injection
 * 
 * Dependency Injection is a design pattern that allows one object to 
 * depend on another object. This pattern is useful when one object 
 * depends on another object that is expensive to create or has a 
 * complex setup.
 * 
 * In JavaScript, we can achieve dependency injection by using the 
 * constructor function.
 */

/**
 * 
 * 依赖注入和控制反转是面向对象编程中的两个重要概念，它们都可以降低代码之间的耦合度，提高代码的灵活性和可测试性。

依赖注入是一种将一个对象所依赖的其他对象的实例传递给该对象的方式，而不是由该对象自己创建。这样做可以减少对象之间的依赖，提高代码的灵活性和可测试性。依赖注入通常可以通过构造函数注入、Setter方法注入和接口注入等方法实现。

控制反转是一种设计原则，它将对象的创建和管理交给外部容器，而不是由对象自己来创建和管理。这样做可以将对象之间的关系交给容器管理，使代码更加灵活和可扩展。控制反转的实现有两种方式：基于接口的控制反转和基于注解的控制反转。

控制反转和依赖注入的关系是，控制反转是一种设计思想，而依赖注入是控制反转思想的一种实现方式。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体将其所依赖的对象的引用传递给它。

总之，依赖注入和控制反转都是面向对象编程中的重要概念，它们可以帮助开发人员设计和实现更加灵活和可测试的代码。
 */







/**
 * 依赖注入 创建对象
 * @param {Engine} engine 
 */
function Car(engine) {  
    this.engine = engine;  
}  
  
function Engine() {  
    this.start = function() {  
        console.log('发动机启动');  
    };  
}  
  
let car = new Car(new Engine());  
car.engine.start(); // 'Engine started'