import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  return (
    <><div className="App">
      <h1 className='title'>Where in the world?</h1>
      <h2>Test your geography skills by locating the correct country based on the given image</h2>
      <h3>Number of Cards: 10</h3>
      <Cards/>
    </div>
    </>
    
  )
}

export default App
