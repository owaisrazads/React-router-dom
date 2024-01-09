import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  
    <div className="navbar bg-slate-600 sticky">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white font-bold">AH-STORE <i class="fa-solid fa-store"></i></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          {/* <li><a>Link</a></li> */}
          <li>
            <details className=' '>
              <summary className='text-white'>
                Menu
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none ">
                <li>
                  <a><Link to='/'>Home</Link></a>
                </li>
                <li>
                  <a><Link to='about'>About</Link></a>
                </li>
                <li>
                  <a><Link to='contact'>Contact</Link></a>
                </li>
                <li>
                  <a><Link to='product'>Product</Link></a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
