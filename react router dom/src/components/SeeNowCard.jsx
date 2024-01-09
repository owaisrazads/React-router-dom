import React from 'react'


const SeeNowCard = ({src, title, price, description}) => {



  return (
 
    <div className='flex justify-center'>
    <div className="card card-side bg-base-100 shadow-xl w-[40%] mt-10 ml-5 h-[20rem]">
<figure><img className='w-[60%] ml-[70px] mr-[20px]' src= {src} alt="Product-img"/></figure>
<div className="card-body">
  <h2 className="card-title ">{title}</h2>
  <p className=''>{description}</p>
  <p className=' text-blue-800 font-semibold'>{price}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
  </div>
 
  )
}

export default SeeNowCard