# deepseek
- 大模型在哪？
  远程
  http api 请求
- LLM 服务
  api 一样 
  fetch 赋予了JS 新生命


## WebLLM
智能前端的战场
- 如何把deepseek 引入前端

## 服务器端返回
- 输入url 或者点击一个超链接（死板）
- 向服务器端发送请求
- node/java 请求，去数据库取数据，生成html 字符串
- 返回html 字符串

## fetch 请求
- 滚动到底部后，加载更多数据 web2.0 富应用体验
  看到新的内容 
- fetch url
  - 不需要刷新页面，主动去服务器端取一次数据， 再用DOM编程 更新页面
- 点赞的时候？
  js fetch api 

- LLM AI 时代
  fetch 取来大模型的能力  智能前端时代
  

## http 请求
- 请求行  GET http://www.baidu.com
  POST https://api.deepseek.com/chat/completions
  - 请求方法  GET POST PUT DELETE OPTIONS HEAD PATCH
- 请求头  key:value 键值对
  设置各种头部信息
  {
    "Content-Type": "application/json"
    Authorization: "Bearer xxx"  // 请求凭证
  }
- 请求体  请求的具体内容
  比如： 大模型的请求体
  {
    "model": "deepseek-llm-7b",
    "messages": [{"role": "user", "content": "你好"}]
  }
  GET 没有请求体
  POST 可以有请求体