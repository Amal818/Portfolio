import React from 'react'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='mt-10 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Amal Zaarour</h1>
        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/amal-zaarour-7440b4275/" className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href="https://github.com/Amal818" className='hover:text-gray-300'>
                <FaGithub size={24}/>
            </a>
        </div>
        
    </div>
  )
}

export default Footer