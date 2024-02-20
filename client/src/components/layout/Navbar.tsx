import { BiSolidWidget, BiUser } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-base-100 shadow-lg fixed w-full z-50">
      <div className="navbar max-w-[1600px] mx-4 flex justify-between">
        <a href="/" className="space-x-3">
          <BiSolidWidget size={30} />
          <p className="font-semibold text-xl">ReduxFlow</p>
        </a>
        <div className="hidden sm:block">
          <ul className="flex space-x-3 md:space-x-6 items-center">
            <a className="translate-y-0.5 group">
              <p className="text-lg font-semibold cursor-pointer">Home</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
            </a>
            <a className="translate-y-0.5 group">
              <p className="text-lg font-semibold cursor-pointer">About Us</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
            </a>
            <a className="translate-y-0.5 group">
              <p className="text-lg font-semibold cursor-pointer">
                Documentation
              </p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
            </a>
            <a className="translate-y-0.5 group">
              <p className="text-lg font-semibold cursor-pointer">Pricing</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
            </a>
            <a href="/login" className="btn btn-sm btn-outline">
              Sign In
              <span>
                <BiUser size={20} />
              </span>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
