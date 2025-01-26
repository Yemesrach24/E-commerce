'use client'; 

import { useSelector, useDispatch } from 'react-redux'; 
import { deleteProduct } from '@/app/reduxstore/productsSlice';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = useSelector((state) => state['products-cart'].items);  
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen  ">
      <div className="text-center p-8 shadow-xl rounded-lg max-w-lg w-full ">
        <p className="text-4xl font-semibold text-gray-900 mb-4">
          Your cart is empty.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Looks like you haven’t added anything to your cart yet. Start shopping and fill it up!
        </p>

        <Link href="/">
        <button 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Start Shopping
        </button>
        </Link>
      </div>
    </div>
    
    
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold text-center mb-6">YOUR CART</h1>
  
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col justify-between border p-4 rounded-lg shadow-lg bg-white">
         
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-contain mb-4" 
          />
  
          
          <p className="text-xl font-semibold mb-2">{item.title}</p>
  
          
          <p className="text-lg mb-2">${item.price} x {item.quantity}</p>
          <p className="text-lg mb-4">Total: ${item.price * item.quantity}</p>
  
        
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-md mb-4" 
            onClick={() => handleRemoveProduct(item.id)}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  
   
    <div className="mt-6">
      <div className="text-right mb-6">
        <p className="text-2xl font-semibold">Total: ${calculateTotal()}</p>
      </div>
  
      <div className="flex justify-between">
      
        <Link href="/" passHref>
          <button className="bg-black hover:bg-gray-400 text-yellow-200 font-semibold py-2 px-4 rounded-md">
            Continue Shopping
          </button>
        </Link>
  
       
        <Link href="/checkout" passHref>
          <button className="bg-black hover:bg-gray-400 text-yellow-200 font-semibold py-2 px-6 rounded-md">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}
