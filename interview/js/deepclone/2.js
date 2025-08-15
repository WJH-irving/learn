const target = { 
    a:1,
    b:2,
};
const source = {
    b:3,
    c:4,
}
 Object.assign(target, source);
// 后来居上
console.log(target);
console.log(source);
