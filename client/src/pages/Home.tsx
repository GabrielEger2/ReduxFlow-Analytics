import HeroText from '../components/Home/HeroText'
import HeroSwapCards from '../components/Home/HeroSwapCards'

const Home = () => {
  return (
    <main className="flex justify-center w-full">
      <div className="w-full max-w-[1600px]">
        <div className="flex flex-col lg:flex-row min-h-screen items-center py-16">
          <div className="lg:w-[50%] flex justify-center">
            <HeroText />
          </div>
          <div className="lg:w-[50%] flex justify-center mt-72 lg:mt-0 -translate-x-6 lg:translate-x-0">
            <HeroSwapCards />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
