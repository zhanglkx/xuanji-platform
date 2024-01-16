
// 原型链继承
function Parent() {
    this.name = 'Kevin'
}

Parent.prototype.getName = function (params) {
    console.log(this.name)
}

function Child(params) {

}

Child.prototype = new Parent()
Child.prototype =  Parent