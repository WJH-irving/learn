// 代码 编译阶段， 在执行阶段前的一段时间  进行语法检测 变量查找
//  执行阶段
// 当前作用域的顶部
// 变量提升不好  会让代码的执行结果和代码阅读顺序不一致，有歧义  所以不建议使用 var
// 申明变量不再使用var ，用let
showName() // 驼峰式命名
console.log(myName);

var myName = "wanjunhao"; // 全局变量
function showName() {
    let b=2; // 局部变量
    console.log('函数执行了')
}