import React from 'react'

const NavBar = () => {

  const toggleMenu = () => {
    document.querySelector("#mobile-contents").classList.toggle("active");
    document.querySelector("#menu").classList.toggle("active");
  }

  return (
    <nav>
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button id="menu" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false" onClick={() => toggleMenu()}>
              <span className="sr-only">Open main menu</span>
              <svg className="open " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center justify-start font-bold text-blue-500">
              HEALTH EXPLORE
            </div>
            <div className="hidden sm:block sm:ml-6 flex-grow">
              <div className="flex space-x-4 justify-center">
                <a href="#" className="px-3 py-2 text-sm font-bold">PROFILE</a>
                <a href="#" className="px-3 py-2 text-sm font-bold">JOBS</a>
                <a href="#" className="px-3 py-2 text-sm font-bold">PROFESSIONAL NETWORK</a>
                <a href="#" className="px-3 py-2 text-sm font-bold">LOUNGE</a>
                <a href="#" className="px-3 py-2 text-sm font-bold">SALARY</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <div className="user-profile">JO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden absolute bottom-0" id="mobile-contents">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="px-3 py-2 text-base font-medium">PROFILE</a>
          <a href="#" className="px-3 py-2 text-base font-medium">JOBS</a>
          <a href="#" className="px-3 py-2 text-base font-medium">PROFESSIONAL NETWORK</a>
          <a href="#" className="px-3 py-2 text-base font-medium">LOUNGE</a>
          <a href="#" className="px-3 py-2 text-base font-medium">SALARY</a>
        </div>
      </div>
    </nav >
  )
}

export default NavBar
