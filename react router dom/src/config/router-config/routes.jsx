import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contacts/Contact'
import Navbar from '../../components/Navbar/'
import Product from '../../screens/products/Product'


const Routers = () => {
    return (
       <div>
         <BrowserRouter>
         <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='product/:id' element={<Product/>}/>
            </Routes>
        </BrowserRouter>
       </div>


    )
}

export default Routers
