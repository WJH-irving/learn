import { useState } from 'react'
import './App.css'
// import LifecycleDemo from './components/LifecycleDemo'
import {
  useToggle,
  useRequest // 必用的请求hooks
} from 'ahooks'

function getUsername() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('ahooks')
    }, 1000)
  })
}

function App() {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const { data, error, loading } = useRequest(getUsername);
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div>Username: {data}</div>
      {/* <LifecycleDemo /> */}
    </>
  );
}

export default App