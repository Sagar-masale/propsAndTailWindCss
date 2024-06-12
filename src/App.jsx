import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className='bg-blue-400 text-black p-5 rounded-xl mb-4'>Tailwind Css</h1>
    <Card UserName='Sagar' Description='This is the first description in components...' BtnText='Click Me' />
    <Card UserName='Sanket' />
 
    </>
  )
}

export default App
