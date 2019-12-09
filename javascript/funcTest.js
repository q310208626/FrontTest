// this 测试
// function aFunc(){
//     return this;
// }
// console.log(aFunc());   // windows


// var person = {
//     name:"lin",
//     printPerson:function(){
//         return this.name;
//     }
// }

// console.log(person.printPerson());

// // arguments 练习
// function sum(){
//     let temp =0;
//     if(arguments.length >0){
//         for (let index = 0; index < arguments.length; index++) {
//             const element = arguments[index];
//             temp += element;
//         }
//     }
//     console.log(arguments.callee);
//     return temp;
// }
// console.log(sum(1,3,7,10,true));

// 闭包测试
var funcArr = [
    {func:function(){}},
    {func:function(){}},
    {func:function(){}}
]

function showTextFunc(text){
    console.log(text);
}



function setOnClick(){
    var showText = ["111","222","333"];
    
    for( var i = 0; i < 3; i ++){
        var text = showText[i];
        funcArr[i].func = (function(){ 
            return function(){showTextFunc(text);}
        })();
    }
}

setOnClick();

funcArr[0].func();
funcArr[1].func();
funcArr[2].func();
