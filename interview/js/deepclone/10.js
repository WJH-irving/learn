let obj1={
    name:'张三',
    age:18,
}
let obj2=obj1; // 引用式赋值 不是复印 没有实现拷贝
obj2.age=20;
console.log(obj1);
console.log(obj2);

let arr1=[1,2,3];
let arr2=arr1;
arr2[0]=100;
console.log(arr1);
console.log(arr2);
// 怎么实现数组对象的拷贝 ?
