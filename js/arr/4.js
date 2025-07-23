// 如何遍历数组
// for(let i=0。。。。) 计数循环 性能好 可读性不好
// while
// forEach  不能关闭
// map filter find some every....
// for of

const names =Array.of('Alice','Bob','Charlie','David');
// console.log(names);
names.forEach(name =>{
    if(name ==='Charlie'){
        console.log("Charlie is here,stop。。。");
        // break;
        return;
    }
    console.log('Processing' + name);
})