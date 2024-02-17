import { BiSolidWidget, BiUser } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-base-100 shadow-lg fixed w-full z-50">
      <div className="navbar max-w-[1600px] mx-4 flex justify-between">
        <a href="/" className="space-x-3">
          <BiSolidWidget size={30} />
          <p className="font-semibold text-xl">ReduxFlux</p>
        </a>
        <div>
          <ul className="flex space-x-6 items-center">
            <p className="text-lg font-semibold">About Us</p>
            <p className="text-lg font-semibold">Documentation</p>
            <p className="text-lg font-semibold">Pricing</p>
            <a href="/login" className="btn btn-sm btn-outline">
              Sign In{' '}
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
