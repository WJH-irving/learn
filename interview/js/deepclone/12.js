let arr1=[
    {
        name:"张三",
        hobbies:["篮球"]
    },
    function(){
        console.log("函数拷贝不了"); // 函数无法序列化 做不到tostring
    }

]
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].name="张三(深拷贝)";
arr2[0].hobbies.push("足球");
console.log(arr1);
console.log(arr2,'\n');

