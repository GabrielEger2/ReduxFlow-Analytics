import { useState } from 'react'

import AnimatedTabs from '../layout/AnimatedTabs'
import PriceCard from '../layout/PriceCard'

const tabs = ['Monthly', 'Annual', 'All Time']
const cards = [
  {
    title: 'Starter',
    priceMonthly: 19,
    priceAnnual: 190,
    priceAllTime: 1999,
    text: 'For small teams just getting started',
  },
  {
    title: 'Pro',
    priceMonthly: 59,
    priceAnnual: 399,
    priceAllTime: 2999,
    text: 'For medium-sized businesses looking to grow their customer base',
  },
  {
    title: 'Enterprise',
    priceMonthly: 99,
    priceAnnual: 600,
    priceAllTime: 4999,
    text: 'For large businesses looking to scale and grow at a rapid pace',
  },
]

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab)
  }

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center lg:space-y-8">
        <div className="flex flex-col items-center text-center px-8">
          <h1 className="text-6xl underline font-bold">Pricing Plans</h1>
          <p className="text-center mt-10">
            Whether you&apos;re a startup, a growing business, or a large
            enterprise, our plans are tailored to support your journey every
            step of the way.
          </p>
        </div>
        <div className="mt-4">
          <AnimatedTabs tabs={tabs} onTabSelect={handleTabSelect} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-4">
          <PriceCard cardData={cards[0]} selected={selectedTab} />
          <PriceCard cardData={cards[1]} selected={selectedTab} />
          <PriceCard cardData={cards[2]} selected={selectedTab} />
        </div>
      </div>
    </section>
  )
}

export default Pricing
