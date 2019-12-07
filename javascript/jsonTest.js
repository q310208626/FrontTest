var str = {"name":"菜鸟教程", "site":"http://www.runoob.com","subObj":{"name":"1"}};

// var webObj = JSON.parse(str);
// console.log(webObj);

var formatJson = JSON.stringify(str,null,4);
console.log(formatJson);

var jsonObj = JSON.parse(formatJson);
console.log(jsonObj);