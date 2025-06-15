// // 这里可以添加JavaScript代码
// // console.log('WebLLM 项目已启动');
// // js 主动的去拉取http 接口
// // web 1.0 时代 html/css/js  服务器端java 返回的 js 只做简单的交互
// // web 2.0 时代 js 主动的请求后端服务器 动态页面
// fetch('https://api.github.com/users/WJH-irving/repos')
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data);
//     document.querySelector('#reply').innerHTML += data.map(repo=>`
//     <ul>
//       <li>${repo.name}</li>
//     </ul>
//     ` ).join('')
//   })


// LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由openai 制定的 
// 请求行
// 命名
// webLLM web 底层是 http 协议
// llm api 服务
// api.deepseek.com 二级域名 LLM 服务以api的方式提供
// https 加密的http 更安全
// /chat 聊天的方式  messages
// /completions 完成的方式
const endpoint="https://api.deepseek.com/chat/completions"
// 请求头 
const headers={
  // 告诉服务端 我发送的数据格式是json
  "Content-Type": 'application/json',
  // 授权
  Authorization: `Bearer sk-9811bdb0731346d0935c9b1937b9e6ec`,
}
// 请求体
const payload={
    model:'deepseek-chat',
    messages:[
        // chat 三种方式
        // 1. system 系统  只会出现一次  设置系统的角色 开始会话时
        // 2. user 用户  提问
        // 3. assistant 助手
        {
            role:'system',content:'You are a helpful assistant.'
        },
        {
            role:'user',content:'你好'
        }
    ]
}

fetch(endpoint,{
  method:'POST',
  headers:headers,
  // http 请求传输只能是字符串或二进制流（如果是图片） 
  body:JSON.stringify(payload)
  // 请求 + LLM 生成需要花时间
  // http 是基于请求响应的简单协议
  // 返回的也是文本或二进制流
}).then(res=>res.json())
// 解析返回的json数据 也要花时间
.then(data=>{
    console.log(data);
    // 拿到返回的内容
    const content=data.choices[0].message.content
    // 把返回的内容显示到页面上
    document.querySelector('#reply').innerHTML+=`
    <ul>
      <li>${content}</li>
    </ul>
    `
})