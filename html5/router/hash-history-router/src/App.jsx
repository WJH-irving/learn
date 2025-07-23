import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <div className="container">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  )
}

export default App ;
