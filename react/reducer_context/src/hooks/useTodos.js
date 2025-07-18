import { 
    useReducer,
} from 'react'
import  todoReducer  from '../reducers/todoReducer';

// es6 initial=[] 参数的默认值
// {todos, } key:value 省略
// `` 模板字符串 
// 解构 []=[] {}={}
// 展开运算符， ...  rest 运算符

// 职责： 返回状态，以及状态的管理
export function useTodos(inital=[]){
    const [todos, dispatch] = useReducer(todoReducer, inital);
    
    const addTodo = (text)=>dispatch({type:'ADD_TODO',text})
    const removeTodo = (id)=>dispatch({type:'REMOVE_TODO',id})
    const toggleTodo = (id)=>dispatch({type:'TOGGLE_TODO',id})
    
    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    }
}