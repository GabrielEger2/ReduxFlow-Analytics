import HeroText from '../components/Home/HeroText'
import HeroSwapCards from '../components/Home/HeroSwapCards'
import AboutUs from '../components/Home/AboutUs'
import Pricing from '../components/Home/Pricing'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Home = () => {
  useScrollToTop()

  return (
    <main className="flex justify-center w-full">
      <div className="w-full max-w-[1600px]">
        <div
          id="hero"
          className="flex flex-col lg:flex-row min-h-screen items-center py-16"
        >
          <div className="lg:w-[50%] flex justify-center">
            <HeroText />
          </div>
          <div className="lg:w-[50%] flex justify-center mt-72 lg:mt-0 mb-80 lg:mb-0 -translate-x-6 lg:translate-x-0">
            <HeroSwapCards />
          </div>
        </div>
        <div
          id="aboutUs"
          className="flex w-full justify-center mb-10 lg:mb-0 lg:min-h-screen"
        >
          <AboutUs />
        </div>
        <div id="pricing" className="flex w-full justify-center mb-20">
          <Pricing />
        </div>
      </div>
    </main>
  )
}

export default Home
