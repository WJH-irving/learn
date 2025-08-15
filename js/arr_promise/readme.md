需求：

api.github.io/users/shunwuyu/repos
api.github.io/users/WJH-irving/followers
api.github.io/users/WJH-irving/following
 promise.all 
 promise的一个静态方法，他会等待所有的promise都执行完毕，或者有一个promise失败，才会执行then方法

- 有一堆的异步任务要执行
- 每一项有是一个promise
- Promise.all() 会返回一个新的promise数组
- 所有项都解决了，都成功了，Promise.all 才解决，
  不然就失败
- 如果都成功，每个promise结果 会按照原promise 下标存放
- Promise.all 是静态方法，不是实例方法 



