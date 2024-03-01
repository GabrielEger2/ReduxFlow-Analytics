import { HeroCardProps } from '../../types/homeTypes'

const HeroCard = ({ image, quote, person, workingPosition }: HeroCardProps) => {
  return (
    <section className="card w-64 sm:w-80 shadow-xl border border-base-200 bg-transparent backdrop-blur">
      <figure className="flex justify-center mt-14">
        <img
          src={image}
          alt={`${person} Photo`}
          className="w-40 h-40 rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-lg text-center font-semibold text-gray-700">
          &quot;{quote}&quot;
        </h2>
        <p className="text-center text-primary mt-4 mb-8">
          {person} <br /> @ {workingPosition}.
        </p>
      </div>
    </section>
  )
}

export default HeroCard
