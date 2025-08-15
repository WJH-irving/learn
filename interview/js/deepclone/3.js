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
// 浅拷贝
Object.assign(target,source);
console.log(target);
console.log(source,'\n');

target.b.name='李四';
target.b.hobbies.push('足球');
target.c=2;


console.log(target,'\n');
console.log(source);
