import { useEffect, useState } from 'react'
import './index.css'
import ThemeBtn  from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider } from './contexts/themes.js'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect (() =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
  
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />          
        </div>
      </div>
    </div>
    </ThemeProvider>

    
  )
}

export default App;
