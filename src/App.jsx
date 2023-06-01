import { useState } from 'react'
import './App.css'
import Cover from './components/Cover'
import StatsCard from './components/StatsCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Cover />
      <StatsCard />
    </div>
  )
}

export default App
