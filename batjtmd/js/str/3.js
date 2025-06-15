// 包装类
let a="abc";
let b=new String("abc");
console.log( a==b);// 值
// js给所有的简单数据类型提供了 相应类型的类 包装类
console.log( a===b);// 类型和值
console.log(b.split(''))
// 为了统一面向对象写法
console.log(a.split(''))//在调用方法时，JS 会主动的把简单数据类型包装成对象类型
// 之后会销毁对象，回归原来的简单数据类型