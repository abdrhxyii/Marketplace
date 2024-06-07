import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './cartSlice'

const Store = configureStore({
    reducer: {
      cart: cartreducer,
    },
  });

  export default Store;