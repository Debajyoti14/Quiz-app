import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        
        <header className="bg-emerald text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/highscores">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">View Highscores<i className="ml-2 fas fa-hand-point-left fa-lg"></i></span>
          </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Time:</a>
          </nav>
        </div>
      </header>
            
        
    )
}

export default Navbar
