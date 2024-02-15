import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'Cart',
    initialState : {
        cartItems: []
    },
    reducers: {
        addToCart: (state , action) => {
          state.cartItems.push({
            title: action.payload.title,
            price: action.payload.price,
            description: action.payload.description,
            image: action.payload.image,
            id: action.payload.id
          })
        }
    }
}

)