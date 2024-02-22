import AnimatedTabs from '../layout/AnimatedTabs'

const Pricing = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-6xl underline font-bold">Pricing Plans</h1>
        <p className="w-[700px] text-center">
          Whether you&apos;re a startup, a growing business, or a large
          enterprise, our plans are tailored to support your journey every step
          of the way.
        </p>
        <AnimatedTabs tabs={['Weekly', 'Monthly', 'Annual']} />
      </div>
    </section>
  )
}

export default Pricing
