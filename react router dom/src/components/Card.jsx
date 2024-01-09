import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, price, description, id}) => {
  const navigate = useNavigate()
function singleProductPage(){
  navigate(`/singleProduct/${id}`)
}

  return (
 
      <div className="card card-compact w-96 bg-base-100 mt-[8rem] shadow-2xl gap-[-4] ">
    <figure><img src={src} className='w-[180px] mt-8' alt="product-image" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
                                <p className=' text-blue-800 font-semibold'>{`${price}`}</p>
      <div className="card-actions justify-end">
        <button onClick={singleProductPage} className="btn btn-primary">Show Now</button>
      </div>
    </div>
  </div>
 
  )
}

export default Card
