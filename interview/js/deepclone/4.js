const target = {
    a:1
}
const source = {
    // 对象的嵌套 
    b:{
        name:'张三',
        hobbies:['篮球','游泳'],
    },
    c:1
}
// // 浅拷贝
// Object.assign(target,source);

// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj,'\n');
newObj.b.name='李四';
newObj.b.hobbies.push('足球');
newObj.c=2;

console.log(newObj);
console.log(source);

