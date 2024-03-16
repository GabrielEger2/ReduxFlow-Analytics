import {
  BiArrowFromRight,
  BiBell,
  BiShareAlt,
  BiSolidWidget,
} from 'react-icons/bi'

import SideBarDropDrown from './SideBarDropDown'

const SideBar = () => {
  return (
    <div className="h-screen w-[300px] mr-12">
      <nav className="fixed w-[300px] h-screen border-r border-base-300 flex justify-center">
        <div className="flex h-full w-full justify-between flex-col">
          <div className="flex justify-between px-4 mt-4 items-center">
            <div className="flex items-center space-x-2">
              <BiSolidWidget size={24} />
              <h1 className="underline text-2xl font-bold">ReduxFlow</h1>
            </div>
            <button className="btn btn-sm btn-ghost">
              <BiArrowFromRight size={24} />
            </button>
          </div>
          <div className="h-full flex">
            <ul className="space-y-10 h-full w-full overflow-y-auto my-10 mx-4">
              <SideBarDropDrown />
            </ul>
          </div>
          <div className="flex w-full border-t border-base-300 h-20 items-center justify-between px-4">
            <div className="avatar placeholder">
              <div className="bg-primary text-neutral-content rounded-full w-8">
                <span className="text-xl">T</span>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <button className="btn btn-sm">
                <BiShareAlt />
                share
              </button>
              <button className="indicator">
                <BiBell size={20} />
                <span className="badge badge-xs badge-primary indicator-item text-base-100">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideBar
