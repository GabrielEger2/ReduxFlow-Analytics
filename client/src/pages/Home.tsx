import HeroText from '../components/Home/HeroText'
import HeroSwapCards from '../components/Home/HeroSwapCards'

const Home = () => {
  return (
    <main className="flex justify-center w-full min-h-screen">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] lg:mx-4 mt-24">
        <div className="lg:w-[50%] flex justify-center">
          <HeroText />
        </div>
        <div className="lg:w-[50%] h-full flex justify-center">
          <HeroSwapCards />
        </div>
      </div>
    </main>
  )
}

export default Home
