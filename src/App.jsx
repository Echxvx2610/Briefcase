import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
