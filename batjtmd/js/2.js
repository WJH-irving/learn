// 数组对象
const arr = ['1','2','3'];
console.log(arr);
console.log(typeof arr);
const date=new Date();
console.log(typeof date);
// 如何区分Object 的这些类型？
console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(Object.prototype.toString.call(date));//[object Date]
console.log(typeof Object.prototype.toString.call(arr));// String

// 会在MDN 文档上开资料
function getType(obj){
    // string api 的选择
    // split + substring

    console.log(Object.prototype.toString.call(obj).split(' ')[1].substring(0,Object.prototype.toString.call(obj).split(' ')[1].length-1));
    return Object.prototype.toString.call(obj).slice(8,-1);
}
console.log('-------------------');
var a=1;
getType(arr);
getType(date);
getType(a);
