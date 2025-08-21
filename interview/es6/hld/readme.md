# 红绿灯

- fetch 能不能中止？
    - 请求结果还没来，用户切换路由了，组件卸载了 内存泄漏 
    - 在组件卸载前，把fetch 给干掉
    - 可以
    - 中止后，会触发 reject 回调
    - 如何中止？
        - 调用 abort 方法
        - 传递一个 AbortController 对象
        - 调用 abortController.abort() 方法


- promise 考题


- signal
    信号 
    用于对各种异步任务，发送类似中断的信号

## 红绿灯
- 异步变同步 
- JS没有内置的sleep 函数
- 编写一个 sleep 返回一个promise 
    箭头函数，一行搞定 
- 循环 