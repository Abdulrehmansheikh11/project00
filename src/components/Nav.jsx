import React from 'react'

export default function Navbar() {
  return (
    <header class="text-gray-400 bg-gray-700 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
       
        <span class="ml-3 text-xl">UPGROW</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white">HOME</a>
        <a class="mr-5 hover:text-white">CATEGORY</a>
        <a class="mr-5 hover:text-white">CONTACT US </a>
      
      </nav>
    
    </div>
  </header>

  )
}




