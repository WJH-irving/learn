# reducer

- 聊聊组件通信
    单项数据流 
    - 父子组件props通信 
    - 子父组件通信-自定义事件 props传递
    - 兄弟组件通信 通过父组件中转 
    跨层级 全局通信
    - useContext + useReducer 
    - redux

- useContext + createContext 打理复杂的全局跨层级共享时 力不从心 俄罗斯套娃
- useReducer 全局状态**管理**
    - 多状态 
    - 公司一样  制定一个制度 
        - 单纯  reducer 纯函数 
- 纯函数和规定
    在正式讲reducer之前 先理解一个概念 纯函数 

## useReducer
- useState 响应式状态
- 响应式状态管理
    上手段