import { BiSolidWidget, BiUser } from 'react-icons/bi'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import useCustomScroll from '../../hooks/useCustomScroll'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { handleLinkClick } = useCustomScroll()

  return (
    <nav
      id="header"
      className="flex justify-center bg-base-100 shadow-lg fixed w-full z-50"
    >
      <div className="navbar max-w-[1600px] mx-4 flex justify-between">
        <Link to="/" className="space-x-3">
          <BiSolidWidget size={30} />
          <p className="font-semibold text-xl">ReduxFlow</p>
        </Link>
        <ul className="flex space-x-3 md:space-x-6 items-center">
          <a
            data-href="#hero"
            onClick={
              location.pathname === '/' ? handleLinkClick : () => navigate('/')
            }
            className="translate-y-0.5 group hidden sm:block"
          >
            <p className="text-lg font-semibold cursor-pointer">Home</p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
          </a>
          <a
            data-href="#aboutUs"
            onClick={
              location.pathname === '/' ? handleLinkClick : () => navigate('/')
            }
            className="translate-y-0.5 group hidden sm:block"
          >
            <p className="text-lg font-semibold cursor-pointer">About Us</p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
          </a>
          <a
            data-href="#pricing"
            onClick={
              location.pathname === '/' ? handleLinkClick : () => navigate('/')
            }
            className="translate-y-0.5 group hidden sm:block"
          >
            <p className="text-lg font-semibold cursor-pointer">Pricing</p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary" />
          </a>
          <Link to="/login" className="btn btn-sm btn-outline">
            Sign In
            <span>
              <BiUser size={20} />
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
