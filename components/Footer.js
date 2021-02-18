import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">About Us</span>
              <p className="mb-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
              <p className="mb-2">All copyrights reserved © 2020 - Health Explore</p>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Sitemap</span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Nurses</a></span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Employers</a></span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Social networking</a></span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Jobs</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Privacy</span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Terms of use</a></span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Privacy policy</a></span>
              <span className="my-2"><a href="#" className="text-md no-underline text-black">Cookie policy</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
