'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';  
import axios from 'axios';
import { addProduct } from '@/app/reduxstore/productsSlice';
import Image from 'next/image';


export default function DetailProductsPage() {
  const dispatch = useDispatch();
  const params = useParams(); 
  const [clickedProduct, setProduct] = useState(null);

  useEffect(() => {
    if (!params?.id) return; 

    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log('Error fetching product data', error));
  }, [params?.id]); 

  if (!clickedProduct) {
    return <div className="flex justify-center items-center font-bold text-2xl mt-10">Loading...</div>; 
  }

  
  const handleAddToCart = () => {
    dispatch(addProduct(clickedProduct)); 
  };

  return (
    <div className="flex flex-col justify-center items-center border shadow-xl cursor-pointer py-10 px-8 m-4 rounded-lg hover:shadow-2xl transition-all duration-300">
  
  <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
    
    
    <div className="flex justify-center items-center">
      <Image 
        src={clickedProduct.image} 
        alt={clickedProduct.title} 
        width={250} 
        height={250} 
        className="cursor-pointer hover:scale-110 transition-all duration-300 rounded-lg shadow-md"
      />
    </div>
    
   
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-4 flex flex-col justify-between">
      <p className="text-center text-2xl font-serif font-semibold text-gray-900">{clickedProduct.title}</p>
      <p className="text-center text-gray-700 text-base">{clickedProduct.description}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">${clickedProduct.price}</p>
        <button 
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>

  </div>
</div>

  );
}





