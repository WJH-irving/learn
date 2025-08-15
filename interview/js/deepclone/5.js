const target ={
    a:1
};
// 如果源对象是简单数据类型，会忽略


Object.assign(target,null);
console.log(target,'\n');
Object.assign(target,undefined);
console.log(target,'\n');

// Cannot convert undefined or null to object
// Object.assign(undefined,{a:1});

const obj = {
    name:'张三',
}
Object.assign(obj);



