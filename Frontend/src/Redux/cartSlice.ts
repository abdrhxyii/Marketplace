// redux/cartSlice.js or cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
        console.log(state, action, "state, action")
    //   state.items.push(action.payload);
    },
    // other reducers like removeItemFromCart if needed
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;


// const cartslice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addItemstoCart: (state: any, action:any) => {
//             const existingItem = state.items.find((item:any) => item.id === action.payload.id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.items.push({ ...action.payload, quantity: 1 });
//             }
//         },
//         removeItemstoCart: (state: any, action: any) => {
//             state.items = state.items.filter((item: any) => item.id !== action.payload.id);
//         }
//     }
// })


// export const {addItemstoCart, removeItemstoCart} = cartslice.actions
// export default cartslice.reducer