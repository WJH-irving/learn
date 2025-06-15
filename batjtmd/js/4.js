// 全局的 js 代码在执行之前会有一个编译的过程  把所有的 var 提升到当前作用域的最前面 变量提升
// 赋值是在执行阶段进行的  赋值不会提升
console.log(value,'----------');
if(false){
    var value =1; // 申明变量 
}
console.log(value); // undefined 类型未定义  但变量已存在   变量提升