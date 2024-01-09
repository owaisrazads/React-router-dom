import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()
    console.log(params);
  return (
    <div>
      Products
    </div>
  )
}

export default Product
