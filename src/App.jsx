import MainBG from './components/MainBackground'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import ShowMore from './components/ShowMore'
import ProjectsContainer from './components/Projects'
import Footer from './components/Footer'

function App() {
  
  return (
    
    <div className=''>
      <MainBG/>

      <div className='p-8 h-screen overflow-hidden'>
        <Navbar/>
        <Intro/>
        <ShowMore/>
      </div>

      <div className="bg-[#161616] p-2 md:p-8 flex flex-col gap-12">
        <Skills/>
        <ProjectsContainer/>
      </div>

      <Footer/>

    </div>
    
  )
}

export default App
