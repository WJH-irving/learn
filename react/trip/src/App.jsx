// import { useState } from 'react'
// import { 
//   Button,
//   Search
// } from 'react-vant'
import './App.css'
import{
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate 
} from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
const Discount = lazy(() => import('@/pages/Discount'));
const Collection = lazy(() => import('@/pages/Collection'));
const Trip = lazy(() => import('@/pages/Trip'));
const Account = lazy(() => import('@/pages/Account'));

function App() {
  

  return (
    <>
      {/* <div
        style={{
          width: '2.66667rem',
          height: '1.49925rem',
          background: 'red'
        }}>
      </div>
      <div
        style={{
          width: '3.466667rem',
          height: '1.49925rem',
          background: 'blue'
        }}>
      </div>
      <div className="box"></div>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button disabled type="danger">Danger</Button>
      <Button loading loadingText='加载中...' type="info" />
      <Search
        readOnly
        placeholder="请输入搜索内容"
        value={value}
        onChange={onChange}
      /> */}
      <Suspense fallback={<div>loading...</div>}>
      {/* 带有tabbar的Layout */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/account" element={<Account />} />
        </Route>
        {/* 空的Layout  */}
        <Route element={<BlankLayout />}>
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      </Suspense>
      

    </>
  )
}

export default App
