import {
  BiSolidWidget,
  BiLogoPython,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoReact,
} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 flex justify-around items-center">
      <aside className="flex">
        <BiSolidWidget size={44} />
        <p className="font-semibold">
          ReduxFlow
          <br />
          <span className="font-normal">Simple management solution.</span>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col space-x-4">
          <a>
            <BiLogoPython size={34} />
          </a>
          <a>
            <BiLogoRedux size={34} />
          </a>
          <a>
            <BiLogoReact size={34} />
          </a>
          <a>
            <BiLogoTailwindCss size={34} />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
