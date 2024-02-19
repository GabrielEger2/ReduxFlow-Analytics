import HeroText from '../components/Home/HeroText'
import HeroSwapCards from '../components/Home/HeroSwapCards'

const Home = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] min-h-screen items-center py-16">
        <div className="lg:w-[50%] flex justify-center">
          <HeroText />
        </div>
        <div className="lg:w-[50%] flex justify-center">
          <HeroSwapCards />
        </div>
      </div>
      <div className="mt-20">
        <p className="text-2xl">teste</p>
      </div>
    </main>
  )
}

export default Home
