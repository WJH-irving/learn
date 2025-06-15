let a="hello";
console.log(a.split(''));
//自动装箱机制只是临时将字符串转换为对象以调用方法，然后立即销毁对象
console.log(typeof a);