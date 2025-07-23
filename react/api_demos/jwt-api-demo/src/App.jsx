import { 
  useState,
  useEffect
 } from 'react'
import {
  getTodos,
  getRepos
} from '@/api'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect (()=>{
    const fetchData=async()=>{
      // const todosResult=await getTodos();
      // console.log(todosResult);
      // setTodos(todosResult.data.data);
      const reposResult=await getRepos();
      console.log(reposResult);
      setRepos(reposResult.data);
    }
    fetchData();
  },[])

  return (
    <>
      {/* {
        todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      } */}
      {
        repos.map(repo => (
          <div key={repo.id}>
            {repo.title}
          </div>
        ))
      }
    </>
  )
}

export default App
