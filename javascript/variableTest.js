
// 外部变量可以被内部引用
var a =10;

function logA(){
    console.log(a); // 可以被引用
}
logA();


let b = 10;

function logB(){
    console.log(b); // 可以被引用
}
logB();


// 内部变量不可以被外部引用
function logC(){
    var c = 10;
    console.log(c);
}
// console.log(c); // 不可以被引用


// 块级作用域可以被外部引用
{
    var d = 10;
}
console.log(d);


// 这是var 跟 let 的一个重要区别，var在内部作用域声明的是全局作用域，let是局部作用域
// 变量重声明
var e = 10;
{
    var e = 11;
}
console.log(e); // 11


let f = 10;
{
    let f = 11;
}
console.log(f); // 10

// window对象访问全局变量
// console.log(window.e);

// 如果外部跟内部都有相同的引用，则先取内部引用
var num = 10;
fun();  
function fun(){
    console.log(num);   // undefined，因为内部引用num此时还未赋值
    var num = 20;
}