import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import SeeNowCard from '../../components/SeeNowCard'

const SingleProduct = () => {
  const [data, setData] = useState(null); // Fixed useState syntax

  const params = useParams()
  //useEffect ka kaam
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <>
      {data ? <SeeNowCard title={data.title}
        src={data.image}
        description={data.description}
        price={` ${data.price} Rupees`} />
        : <span class="loader"></span>};
    </>
  )
}

export default SingleProduct
