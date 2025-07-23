import { useState } from 'react'
import Counter from './components/Counter'
import { useCountStore } from './store/count'
import './App.css'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'

function App() {
  const { count } = useCountStore()
  return (
    <>
      <Counter />
      <div>当前计数: {count}</div>
      <TodoList />
      <RepoList />
    </>
  )
}

export default App
