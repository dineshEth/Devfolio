import {Hero, Navbar, Testinomial, Footer, Projects, Contact, Overview } from './components'

function App() {

  return (
    <div className="bg-primary text-[#603e9ae9] z-10 relative overflow-hidden">
      <div className='bg-cover bg-hero-pattern bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div className="w-full px-8 sm:px-2 max-w-6xl mx-auto">
        <Overview />
        <Projects />
        <Testinomial />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
