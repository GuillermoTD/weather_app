import { useState } from 'react'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col items-center justify-center">
      <Weather />
    </div>
  )
}

export default App
