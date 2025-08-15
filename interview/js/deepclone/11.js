const arr = [1,2,3];
const newArr = [...arr];
newArr[0]=100;
console.log(arr);
console.log(newArr,'\n');

let arr2=arr.slice(); // 其实是浅拷贝 他是吧每一项分割开,只不过这个数组分开后里面是简单数据类型,所以是拷贝到这个数字到新数组
arr2[0]=1000;
console.log(arr);
console.log(arr2,'\n');


const arr3=[[1,2],[3,4],[5,[6,7]]];
let arr4=arr3.slice();// 浅拷贝 分割后里面有复杂数据类型,他只是把这个复杂数据类型 引用赋值 到了新数组 所以是浅拷贝

arr4[0][0]=10000;
console.log(arr3);
console.log(arr4,'\n');

let arr5=arr3.concat();// 浅拷贝 
arr5[0][0]=100000;
console.log(arr3);
console.log(arr5,'\n');



