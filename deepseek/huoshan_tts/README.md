# 智能前端之语音
- AI时代新的交互体验，语音交互
  虚拟数字人 AIGC 文字->语音

- 敏感信息怎么保护？
  .gitignore  哪些文件不用提交到远程 仓库也不进入
  node_modules/ 太大了 没有必要提交  npm i 

- 环境变量
  .env.local  本地环境变量  . 开头 本地项目需要的key
  添加到.gitignore 中

- 单项数据流
  input value {prompt}
  保持数据状态和界面的一致性
  UI = f(state)  state 驱动界面
  onChange 修改  将状态保持与我们的界面同步

- base64 格式