// 获取日期
let date = new Date();
console.log(date);  // 2019-12-03T02:58:02.124Z

// 获取年
let year = date.getFullYear();
console.log(year);  // 2019

// 获取月(js 的月份是从0开始的，所以12月份获取到的数据是11)
let month = date.getMonth();
console.log(month);  // 11

// 获取日
let getDate = date.getDate();
console.log(getDate);   // 3

// 获取日(周)
let day = date.getDay();
console.log(day);   // 2 星期二

// 获取小时
let hour = date.getHours();
console.log(hour);  // 10

// 获取分
let minutes = date.getMinutes();
console.log(minutes);  // 58

// 获取秒
let seconds = date.getSeconds();
console.log(seconds);  // 2

// 获取毫秒
let millSeconds = date.getMilliseconds();
console.log(millSeconds);  // 124

// 获取时间，从1970年1月1日到现在的毫秒数
let time = date.getTime();
console.log(time);  // 1575341882124

// 数字转时间
let timeToDate = new Date(1575341882124);
console.log(timeToDate);    // 2019-12-03T02:58:02.124Z

console.log(Object.prototype.toString.call(date));




