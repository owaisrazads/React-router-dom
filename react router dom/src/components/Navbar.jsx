import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {


  // UIseNavigate
  const navigate = useNavigate()

  // Navigate To Cart
  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
  
    <div className="navbar bg-slate-600 sticky">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white font-bold">AH-STORE <i class="fa-solid fa-store"></i></a>
      </div>
      <div>
        <h2 onClick={navigateToCart} className='text-white font-bold' >Cart</h2>
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
