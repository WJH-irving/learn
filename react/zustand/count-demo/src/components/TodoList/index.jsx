import{
    useTodosStore
}from '../../store/todos'

const TodoList = ()=>{
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    } = useTodosStore()
    return (
        <>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            {todo.todo}
                            <button onClick={() => deleteTodo(todo.id)}>删除</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default TodoList