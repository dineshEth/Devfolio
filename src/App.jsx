import {Hero, Navbar, Testinomial, Footer, Projects, Contact, Overview } from './components'

function App() {

  return (
    <div className="bg-primary text-[#603e9ae9] z-10 relative">
      <div className='bg-cover bg-hero-pattern bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div className="w-full mx-auto">
        <Overview />
        <Projects />
        <Testinomial />
        <Contact />
        <Footer />
        Crafting immersive 3D experiences and interactive interfaces for captivating web journeys.
        Dive into immersive 3D experiences and captivating interfaces with Dinesh, your go-to frontend wizard
      </div>
    </div>
  )
}

export default App
