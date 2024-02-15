
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Card from '../../components/Card';

const Product = () => {

  
  //states


  const [data, setData] = useState([]); // Fixed useState syntax

  //useEffect ka kaam
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
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
      <div className='flex justify-evenly mt-5 gap-5 flex-wrap'>
        {data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.image}
              price={` ${item.price} $`}
              id={item.id}
            />
          ))
        ) : (
          <span class="loader"></span>
        )}
      </div>
    </>
  );
};

export default Product;


