# tts 智能语音

## 智能前端  AI用户体验
- webllm
  AIGC api remote call
- tts 语音
  网易音乐
- 用户体验
  音乐不要自动播放，社死


  ## 如果 不能做DOM 编程， react 里面怎么播放音乐？
  - 原生的js DOM API 低效  document.querySelector 不用
  - audio 播放？


  ## 路径
  - 相对路径
    ./  同一级别
    ../ 上一级
    ./demo/ 
  - 绝对路径
    物理路径 C:/
    网站根路径 /  index.html  根目录
  - http://localhost:5173/sounds/snare.wav
    - npm run dev  启动本地服务器  5173 端口
    - 本地服务器 http://127.0.0.1:5173
    端口背后对应的是不同服务
    - index.html 首页
    - public  静态资源的
      约定所有的资源可以直接访问

## react 事件机制
  - 不可以用addEventListener 来绑定事件   EventListener  只能绑定原生的DOM事件
  - onClick  react事件， 和html 原生支持的事件有点像


## JavaScript高级程序设计 一书中 event 事件机制
- 多种事件机制
  - DOM0  事件
    onclick   html 属性    但是将html 和JS 事件上耦合  不推荐
  - DOM2  事件
    addEventListener  html 和JS 事件上分离
  - react
    采用了 DOM0 的方式   有利于组件html的表达 
    vue中使用 @click  react 优于vue
    API 层面上看过去是这样的，其实底层还有天地 react 事件机制  采用了 合成事件机制  事件池机制 

## useRef
- 可以帮助我们在react 中拿到DOM对象
  - useRef(null) 空对象
  - current 属性 null
  - jsx ref={ref}  DOM 绑定     拿到DOM对象 赋值给ref.current
  - ref.current 引用DOM对象