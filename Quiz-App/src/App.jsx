import React from 'react'
import Header from './components/Header'
import Quiz from './components/Quiz'
import "./index.css"

const App = () => {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Quiz/>
    </main>
    </>
   
  )
}

export default App