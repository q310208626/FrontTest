var a = 123;
console.log(this.a);  // 123,此时this指向window



// 当方法被浏览器直接调用时,方法内this绑定了window
function aFunc(){
   return this;     
}
// console.log(aFunc()); // window



// 严格模式下,方法内this无绑定
"use strict"
function bFunc(){
    return this;
 }
//  console.log(bFunc());  // undefined



 // 当方法被对象调用时,this指向调用对象
function cFunc(){
    console.log(this.id);
}
// document.getElementById("thisButton").onclick = cFunc;  // thisButton



// 对象中的this,对应的是当前对象
let person = {
    name:"lin",
    age:"24",
    printPerson: function(){
        console.log(this.name+":"+this.age);    // lin:24
    }
}
person.printPerson();



// call()跟apply()可以切换当前上下文，这里切换成person2的this
person2 = {
    name:"li",
    age:"27"
}
person.printPerson.call(person2);   // li:27
person.printPerson.apply(person2);   // li:27

