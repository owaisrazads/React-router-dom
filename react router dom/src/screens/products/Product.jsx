// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios  from 'axios'
// import Card from '../../components/Card'


// //dynamic routes k lye params lagaya h

// const Product = () => {
//     const params = useParams()
//     console.log(params);
//     //states
//     const [data, setData ] = useState = ([]);
//     //useEffect ka kaam
//     useEffect(()=>{
//       axios.get('https://fakestoreapi.com/products')
//       .then((res)=>{
//         console.log(res.data);
//         setData(res.data);
//       }).catch((Error)=>{
//         console.log(Error);
//       })
//     }, [])
//     return (
//       <>
//       <div className='flex justify-evenly mt-5 gap-5 flex-wrap'>
//       {data.length > 0 ? data.map((item)=>{
//         return <Card key={item.id} title={item.title} description={item.description} src={item.image} price={item.price}/>
//       }): <h1>Loading...</h1>}
//       </div>
//       </>

//     )
//   }

// export default Product




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';

const Product = () => {
  const params = useParams();
  console.log(params);
  
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
              price={item.price}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Product;


