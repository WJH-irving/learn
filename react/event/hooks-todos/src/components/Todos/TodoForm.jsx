import { 
    useState // 私有状态
} from 'react'
const TodoForm = ({onAddTodo}) =>{
    // 数据
    // props 参数数据
    // state 私有的数据
    // 单向数据流
    // const{onAddTodo}=props
    const [text,setText]=useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        let result = text.trim();
        if(!result) return;
        onAddTodo(result);
        setText(''); // 用户体验 清空  数据状态和界面状态一致 要敏感
    }
    // JSX 一定得有唯一的最外层元素 树状 树来编译解析JSX，
    return (
        <>
            <h1 className="header">
                TodoForm
            </h1>
            <form className="todo-input" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)} // 维护数据值与input状态的统一
                    placeholder="请输入"
                    required 
                 />
                <button type="submit">提交</button>
            </form>
        </>
    )
}
export default TodoForm