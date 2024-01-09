import React from 'react'

const Card = ({src, title, price, description}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={src} className='w-[180px] mt-5' alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Show Now</button>
      </div>
    </div>
  </div>
  )
}

export default Card
