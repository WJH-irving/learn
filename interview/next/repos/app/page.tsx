"use client"; // 表示 client 编译 客户端渲染 服务器端无法进行Dom操作、监听
// 事件监听、生命周期等 
import {
  useState,
  useEffect
} from 'react'

import {
  Button
} from '@/components/ui/button'

import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';

export default function Home() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = async () => {
    if (!newTodo.trim()) {
      return;
    }

    await fetch('/api/todos',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        text:newTodo
      })
    })

      setNewTodo("")
      fetchTodos();
  }
  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`,{
      method:'DELETE'
    }) 
    fetchTodos();
  }
  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  }
  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    // xm md  lg
    <main className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <Button onClick={addTodo}>Add</Button>
          </div>
          <div className="space-y-2">
            {
              todos.map(todo => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between p-2 border rounded"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="w-4 h-4"
                    />
                    <span className={todo.completed ? 'line-through' : ''}>
                      {todo.text}
                    </span>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={()=>deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              ))
            }
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
