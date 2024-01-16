const obj = {
  value: 1
};

function foo(o) {
  o = 2;
  console.log(o); //2
}

foo(obj);
console.log(obj.value); // 1
console.log(obj); // { value: 1 }


function add(param) {
  param += 10;
  console.log(param);//11
}

const num = 1;
add(num);
console.log(num);//1


let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age); // undefined console.log(name2.age); // 26 console.log(typeof name1); // string console.log(typeof name2); // object
console.log(name1); // undefined console.log(name2.age); // 26 console.log(typeof name1); // string console.log(typeof name2); // object
console.log(name2); // undefined console.log(name2.age); // 26 console.log(typeof name1); // string console.log(typeof name2); // object

console.log("==============");

const value = {
  value: 1
};

function fun(o) {
  o.value = 2;
  console.log(o.value);//2
  console.log(o);//{value: 2}
}

fun(value);
console.log(value);//{value: 2}
console.log(value.value);//2


