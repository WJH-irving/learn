// /*  
//  @func 反转字符串
//  @param {string} str 要反转的字符串
//  @return {string} 反转后的字符串

// */

// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello'));

// 函数表达式
// es5 函数表达式
const reverseString1=function(str){
    return str.split('').reverse().join('');
}
//es6 箭头函数 简洁  function 不要了 用箭头代替
// {} 也省了   函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号
// 函数只有一个参数，可以省略小括号
// 他是返回值时   可以省略return
/*
箭头函数
1. 函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号
2. 函数只有一个参数，可以省略小括号
*/
const reverseString=str => str.split('').reverse().join('');
console.log(reverseString('hello'));