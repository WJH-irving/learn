import { useState } from 'react'
import './App.css'
// todos 列表需要渲染
// 函数组件  App 组件 组合其他的组件完成应用
// 返回html 的函数——函数组件
// html css js 用函数组合在一起——组件

// function App() {
//   // react 比vue 更加纯粹
//   const todos=['吃饭','睡觉','打豆豆'];// 数组 -> 数据

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>任务</th>
//             <th>状态</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             // 动态的
//             // react 中 用{} 表示js代码
//             // 如果不用{}则需要js DOM编程API
//             // 在html中写js代码
//             todos.map((item,index)=>(
//               <tr>
//                 <td>{index+1}</td>
//                 <td>{item}</td>
//                   <button>完成</button>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </>
//   )
// }
function App() {
  // 数据 -> 数据状态  数据业务 改变的 数据状态
  const [todos,setTodos]=useState(['吃饭','睡觉','打豆豆']);
  let [title,setTitle]=useState('ECUT alicia')

  setTimeout(()=>{
    setTodos(['吃饭','睡觉','打豆豆','学习']);
    setTitle('B站 alicia')
  },3000)

  return (
    <div>
      <h1 className="title">{title}</h1>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {
            // html 模板
            todos.map((item,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{item}</td>
                <td>
                  <button>完成</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
