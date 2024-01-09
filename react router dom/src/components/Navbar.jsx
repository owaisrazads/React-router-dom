import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div>
    //   <nav className='p-3 bg-blue-800 text-white font-semibold items-center '>
    //     <ul className='flex justify-end gap-8 mt-2 items-center'>
    //         <li>
    //             <Link to= '/'>Home</Link>
    //         </li>
    //         <li>
    //             <Link to= 'about'>About</Link>
    //         </li>
    //         <li>
    //             <Link to= 'contact'>Contact</Link>
    //         </li>
    //         <li className='text-yellow-300'>
    //             <Link to= 'product/bhaimaslahalhogya'>Products</Link>
    //         </li>
    //     </ul>
    //   </nav>
    // </div>
    <div className="navbar bg-slate-600 sticky">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">ZeeMart <i class="fa-solid fa-store"></i></a>
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
                  <a><Link to='product/id'>Product</Link></a>
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
