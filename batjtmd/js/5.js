// 全局作用域
// let 支持块级作用域  var 不支持块级作用域
// 块级作用域 是高级语言的特性

function fn(){ // 函数作用域
    let a =2;
    if(true){ // 块级作用域
        let b=3;
        var c=4;
    }
    console.log(a); // 2 let 作用于于块级作用域
    console.log(c); // 4 var 作用于于函数作用域
    console.log(b);// 报错 变量未定义 变量不存在  let 作用于于块级作用域
}
console.log(c); // 报错 变量未定义 变量不存在 var 作用于于函数作用域
console.log(a); // 报错 变量未定义 变量不存在 let 作用于于块级作用域
if(false){ // 块级作用域
    let value =1;
}
// 在全局作用域找不到
console.log(value); // 报错 变量未定义 变量不存在 let 作用于于块级作用域