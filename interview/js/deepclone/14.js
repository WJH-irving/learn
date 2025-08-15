const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [1,2,3],
    field6: null,
    field7: new Date()

}

target.target=target; // 循环引用  

// es6 新的数据类型 hash Map
function clone(source,map=new WeakMap()){

    if(typeof source ==='object'){
        let cloneTarget = Array.isArray(source)?[]:{}; // 分配新空间
        if(map.get(source)){
            return map.get(source);
        }
        map.set(source,cloneTarget);
        for(const key in source){ // 遍历
            cloneTarget[key]= clone(source[key],map);

        }
        

        return cloneTarget;
    } else{
        return source;
    }

}
// 栈溢出 
let obj=clone(target);

obj.field4.child='objchild';

console.log(target);
console.log(obj);
