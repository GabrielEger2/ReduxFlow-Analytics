import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import HeroCard from './HeroCard'
import jennyPhoto from '../../assets/imgs/JennyPhoto.jpg'
import lindaPhoto from '../../assets/imgs/LindaPhoto.jpg'
import johnPhoto from '../../assets/imgs/JohnPhoto.jpg'

const HeroSwapCards = () => {
  const cardVariants = {
    first: { rotate: -3, x: '-80%', zIndex: 20 },
    second: { rotate: 0, x: '-40%', zIndex: 10 },
    third: { rotate: 3, x: '0%', zIndex: 0 },
  }

  // Helper function to get the variant name based on index
  const getVariantName = (index: number) => {
    const names = ['first', 'second', 'third']
    return names[index]
  }

  // Helper function to get the next state based on current state
  const getNextState = (currentState: string) => {
    switch (currentState) {
      case 'first':
        return 'third'
      case 'second':
        return 'first'
      case 'third':
        return 'second'
      default:
        return 'first'
    }
  }

  const cards = [
    {
      photo: jennyPhoto,
      quote:
        'With its intuitive interface and multiple comprehensive features, ReduxFlow has transformed the way I manage work',
      person: 'Jenny F. Lee - Marketing Manager',
      workingPosition: 'Acme Inc',
    },
    {
      photo: johnPhoto,
      quote:
        "ReduxFlow has transformed the way I manage projects. Now I can easily track the progress of my team's work and make adjustments.",
      person: 'John Doe - Team Lead',
      workingPosition: 'Doe Inc',
    },
    {
      photo: lindaPhoto,
      quote:
        "Never thought I could manage my team's work so easily. All thanks to ReduxFlow! It's a must-have for any team.",
      person: 'Linda Smith - QA Lead',
      workingPosition: 'Smiths Inc',
    },
  ]

  const [cardState, setCardState] = useState(
    cards.map((_, index) => getVariantName(index)),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCardState(cardState.map((state) => getNextState(state)))
    }, 5000)

    return () => clearInterval(timer)
  }, [cardState])

  return (
    <div className="flex relative items-center">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={getVariantName(index)}
          animate={cardState[index]}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <HeroCard
            image={card.photo}
            quote={card.quote}
            person={card.person}
            workingPosition={card.workingPosition}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default HeroSwapCards
