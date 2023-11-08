import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import HomeScreen from './screens/homeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <HomeScreen />
    </Layout>
  )
}

export default App
