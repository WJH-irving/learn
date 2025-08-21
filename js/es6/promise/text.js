let promise = new Promise(function(resolve, reject) {
  // 异步操作代码
  setTimeout(() => {
    resolve("操作成功");
  }, 1000);
});
promise.then((value) => {
  console.log(value); // 输出：操作成功
});
