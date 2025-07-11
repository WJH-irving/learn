import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme,setTheme]=useState('dark');
  // console.log(ThemeContext,'////////')
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>切换主题</button>
      {/* <Uncle /> */}
      {/* <Parent>
        <Child>
          <GrandChilee>
            <GreatGrandChild></GreatGrandChild>
          </GrandChilee>
        </Child>
      </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App
