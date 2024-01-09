import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='p-3 bg-blue-800 text-white font-semibold items-center '>
        <ul className='flex justify-end gap-8 mt-2 items-center'>
            <li>
                <Link to= '/'>Home</Link>
            </li>
            <li>
                <Link to= 'about'>About</Link>
            </li>
            <li>
                <Link to= 'contact'>Contact</Link>
            </li>
            <li className='text-yellow-300'>
                <Link to= 'product/bhaimaslahalhogya'>Products</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
