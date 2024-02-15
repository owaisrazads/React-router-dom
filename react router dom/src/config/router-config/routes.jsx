import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Navbar from '../../components/Navbar/'
import Product from '../../screens/products/Product'
import SingleProduct from '../../screens/single-product/SingleProduct'




const Routers = () => {
    return (
       <div>
         <BrowserRouter>
         <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='product' element={<Product />}/>
                <Route path='singleProduct/:id' element={<SingleProduct />}/>
            </Routes>
        </BrowserRouter>
       </div>


    )
}

export default Routers
