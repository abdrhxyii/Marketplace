import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 2 },
    // Add more items as needed
  ]);

  const removeFromCart = (itemId: any) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
          <div className="flex items-center">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Product" className="w-12 h-12 object-cover mr-4" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-4">Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
              <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;
