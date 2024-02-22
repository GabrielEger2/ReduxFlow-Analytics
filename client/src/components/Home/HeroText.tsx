import { ReactTyped } from 'react-typed'

const HeroText = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 max-w-6xl">
      <div>
        <span className="block mb-2 md:mb-4 md:text-lg text-primary font-medium">
          Welcome to ReduxFlow
        </span>
        <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold inline">
          Make Managing your project more
          <span className="inline whitespace-nowrap text-primary">
            {' '}
            <ReactTyped
              strings={['fun', 'easy', 'fast', 'simple']}
              typeSpeed={80}
              backSpeed={100}
              loop
            />
          </span>
        </h3>
        <p className="text-lg font-semibold text-gray-600 mt-6 mb-4 lg:mt-10 lg:mb-8">
          ReduxFlow is a user-friendly and efficient management tool crafted to
          enhance the experience of project management. It offers a streamlined
          and intuitive interface that simplifies the complexities often
          associated with managing projects...
        </p>
        <a href="login" className="btn btn-primary text-base-100">
          SignUp or LogIn
        </a>
      </div>
    </section>
  )
}

export default HeroText
