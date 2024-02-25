import { motion } from 'framer-motion'

interface PriceCardProps {
  cardData: {
    priceMonthly: number
    priceAnnual: number
    priceAllTime: number
    text: string
    title: string
  }
  selected: string
}

const PriceCard: React.FC<PriceCardProps> = ({ cardData, selected }) => {
  return (
    <>
      <section className="px-3 py-4">
        <div className="mx-auto w-fit">
          <motion.div
            whileHover="hover"
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-primary p-8"
          >
            <div className="relative z-10 text-base-100">
              <span className="mb-3 block w-fit rounded-full bg-base-300/40 px-3 py-0.5 text-sm font-light text-base-100">
                {cardData.title}
              </span>
              <motion.span
                initial={{ scale: 0.85 }}
                variants={{
                  hover: {
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: 'backInOut',
                }}
                className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
              >
                $
                {selected === 'Monthly'
                  ? cardData.priceMonthly
                  : selected === 'Annual'
                    ? cardData.priceAnnual
                    : selected === 'All Time'
                      ? cardData.priceAllTime
                      : 'error'}
                /
                <br />
                Month
              </motion.span>
              <p>{cardData.text}</p>
            </div>
            <button
              onClick={() => document.getElementById('modal').showModal()}
              className="absolute bottom-4 left-4 right-4 z-20 btn hover:bg-transparent hover:text-base-100 transition-all duration-500"
            >
              Get it now
            </button>
            <motion.svg
              width="320"
              height="384"
              viewBox="0 0 320 384"
              fill="none"
              className="absolute inset-0 z-0"
              variants={{
                hover: {
                  scale: 1.5,
                },
              }}
              transition={{
                duration: 1,
                ease: 'backInOut',
              }}
            >
              <motion.circle
                key={0}
                variants={{
                  hover: {
                    scaleY: 0.5,
                    y: -25,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: 'backInOut',
                  delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#262626"
              />
              <motion.ellipse
                key={0}
                variants={{
                  hover: {
                    scaleY: 2.25,
                    y: -25,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: 'backInOut',
                  delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#262626"
              />
            </motion.svg>
          </motion.div>
        </div>
      </section>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello from the DEV!</h3>
          <p className="mt-4 mb-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey there! Just a little heads-up:
            what you&apos;re seeing isn&apos;t an actual product. Everything in
            this project is designed purely for demonstration and educational
            reasons.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I encourage you to dive in and explore
            all it has to offer. Thanks so much for your understanding and happy
            exploring!
          </p>
          <form method="dialog">
            <button className="btn btn-primary text-base-100 w-full mt-6">
              Got It
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default PriceCard
