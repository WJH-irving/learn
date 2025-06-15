# react 业务
friends 数据
App
挂载点
页面的显示
- 原生JS
  DOM 编程 底层API 不够高效
  聚焦于业务
  前端切图仔（html、css、一点js） -> 前端开发工程师  (微博、美团) JS框架(vue/react) -> node 全栈开发 (node + 数据库) -> react native 移动端开发 (Android、ios APP 开发) -> AIGC AI应用 -> 全栈工程师 
  Web 应用（www.baidu.com）  移动应用（Android、Ios）
  Node (server)  AI 统领一切 JS AI全栈工程师 

  ## **项目**的创建
  - npm 是什么？ node package manager 包管理器 类似python的pip
    node的包管理器 安装react package App开发能力
  - npm init vite
    按 vite 模板初始化项目 init 初始化
    vite vue/react 项目模板和**工程**化
  - 选择一些配置
    - react
    - js 
    项目模板，基于它开始开发
  - cd 项目名称 进入项目目录
  - npm i 安装依赖
    node_modules 包所在
  - npm run dev 启动项目
    3000 端口 启动项目

## 5 W
- what Web App
- how npm init vite 初始化并vite的项目模板
- 安装依赖 npm i
- 启动项目 npm run dev
  在 http 5173 端口 
  react 技术栈 驱动的 Web App 
远离JS 底层API 专注于业务开发
## 响应式业务

## TODOS 任务列表
  - 数据['脱单'，'学习'，'健身']
    数据在页面上渲染  react 提供点啥 支持这个业务

## react 初体验
- react 组件时完成开发任务的最小单元
- 组件组合html，css，js
- 组件是一个函数
- 返回html
- 函数体里面 return 之前可以申明数据和业务逻辑
- {} js 表达式 不用写DOM API 

## 响应式数据
- 数据会发生改变的，数据状态 state
- [todos, setTodos] = useState(初始值) 使用一个数据状态,返回一个数组
  数组第一项 数据项
  数组第二项 修改数据项的函数

