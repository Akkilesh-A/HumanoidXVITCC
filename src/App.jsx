import React,{useState,useEffect,lazy,Suspense} from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from './Components/Footer'
import LandingContent from './Components/Section-1/LandingContent'
import NavBar from './Components/NavBar'
const About = lazy(() => import('./Components/Section-2/About'))
const Obs = lazy(() => import('./Components/Section-5/Obs'))
const SynthetixBanner = lazy(() => import('./Components/Section-4/SynthetixBanner'))
const ImageCarousel = lazy(() => import('./Components/Section-3/ImageCarousel'))
const VideoPlayer = lazy(() => import('./Components/ExtraFeatures/VideoPlayer'))
const ProjectCards = lazy(() => import('./Components/ProjectCard/ProjectCards'))

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  })
  return (
    <div className='whole-website bg-gradient-to-b from-[#178365] to-stone-900 '>
      {loading ? <div className='flex text-white flex-col w-[100%] items-center justify-center h-[100vh] sm:h-[80vh]'>
            <ClimbingBoxLoader
            color={'#178376'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      </div> 
      :<div>
        <NavBar />
        <LandingContent />
        <Suspense fallback={<div className='flex text-white flex-col w-[100%] items-center justify-center'>
            <ClimbingBoxLoader
            color={'#178376'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      </div> }> 
          <About /> 
        </Suspense> 
          <ProjectCards /> 
          <VideoPlayer />
          <ImageCarousel />
          <SynthetixBanner /> 
          <Obs />
          <Footer />       
        </div>}
    </div>
  )
}

export default App