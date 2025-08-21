import {
    NextResponse // res
} from 'next/server' // api server

// ts 是 js的超集 可以定义类型
import { type Todo } from '@/app/types/todo';


let todos: Todo[] = [
    {
        id: 1,
        text: '学习ts',
        completed: false
    },
    {
        id: 2,
        text: '学习next',
        completed: false
    },
    {
        id: 3,
        text: '学习react',
        completed: false
    }
];
// Restful 一切皆资源
// 后端就是向用户暴露资源的 通过Restful定义的 暴露资源的方式来暴露资源
// method + 资源 URL定义规则
export async function GET() {
    return NextResponse.json(todos);

}

export async function POST(request: Request) {
    // 获取请求体 body json
    const data = await request.json();
    // 核心的数据，函数的参数，返回值
    const newTodo: Todo = {
        id: + Date.now(),
        text: data.text,
        completed: false
        // typescript 除了强类型外，代码提示更好，写起来更快
    }
    todos.push(newTodo);
    return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
    const data = await request.json(); // 请求体
    todos = todos.map(todo =>
        todo.id === data.id ? { ...todo, completed: data.completed } : todo
    );
    return NextResponse.json(todos);
}

// restful 简历
export async function DELETE(request:Request){
    const data = await request.json();
    todos = todos.filter(todo => todo.id !== data.id); 
    return NextResponse.json(todos);

}