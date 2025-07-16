import { 
  useState,
  Fragment  // 文档碎片组件
} from 'react'
import './App.css'

// function Demo() {


//   return (
//     // DOM 树多了一层不需要的节点，DOM 解析性能下降，多迭代一层
//     // <div>
//     <Fragment>
//       <h1>Hello</h1>
//       <p>你好</p>
//     </Fragment>
//     // </div>
//   )
// }

function Demo({items}){
  return items.map(item => (
        <Fragment key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.age}</p>
        </Fragment>
      ))
}



function App() {
  const items = [
    {
      id: 1,
      name: '张三',
      age: 18
    },
    {
      id: 2,
      name: '李四',
      age: 20
    }
  ]
  return (
    <>
    <Demo items={items} />
    </>
  )
}


export default App
