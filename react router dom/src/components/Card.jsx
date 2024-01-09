import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, price, description, id}) => {
  const navigate = useNavigate()
function singleProductPage(){
  navigate(`/singleProduct/${id}`)
}

  return (
 
      <div className="card card-compact w-96 bg-base-100 mt-[10rem] shadow-2xl">
    <figure><img src={src} className='w-[180px] mt-8' alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
        <button onClick={singleProductPage} className="btn btn-primary">Show Now</button>
      </div>
    </div>
  </div>
 
  )
}

export default Card
