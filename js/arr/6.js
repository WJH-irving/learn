const arr = [1,2,3];
// 可迭代对象  比计数循环可读性要好
for(let item of arr){
    console.log(item);
}
// for of itme 还要拿到index？
for(const [index,value] of arr.entries()){
    console.log(index,value);
}
console.log(arr.entries());