import {Hero, Navbar, Testinomial, Footer, Projects, Contact } from './components'

function App() {

  return (
    <div className="bg-primary text-[#603e9ae9] z-10 relative">
      <div className='bg-cover bg-hero-pattern bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div className="w-full mx-auto">
        {/* <h1 className='font-extrabold text-6xl text-center'>Dinesh Portfolio</h1> */}
        <Projects />
        <Testinomial />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
