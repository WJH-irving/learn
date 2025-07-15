import {
  useState,
  Suspense,
  lazy // 懒加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectedRoute from './pages/ProtectedRoute';
import Pay from './pages/Pay';
import Login from './pages/Login';

// import Home from './pages/Home'
// import About from './pages/About'
// 函数 路由 -> Route 
// 懒加载
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));




function App() {


  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pay" element={
              <ProtectedRoute>
                <Pay />
                <div>123</div>
                <div>567</div>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
