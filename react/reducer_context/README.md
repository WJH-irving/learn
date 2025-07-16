# reducer and context 
- useReducer 的核心 
    - 响应式的状态管理
    - reducer 纯函数 状态生产 状态改变定规矩
    - initValue 初始值 
    - dispatch 派发一个动作 
        {type:'',payload: } 
- useContext 
    - createContext
        Context.Provider
        useContext 全局共享 
    - useContext(通信) + useRedecer(响应式状态)
        跨层级 -> 应用(them/login/todos/..) 状态管理 
    
    - 自定义hook
        组件(渲染) + hook(状态)

    - hook + useContext 
        全局应用级别响应式状态 
    - hook + useContext + useReducer 
        全局应用级别响应式状态管理 