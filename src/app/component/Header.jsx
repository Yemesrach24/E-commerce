'use client';
import React from 'react';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '@/app/reduxstore/productsSlice'; 

const Header = () => {
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <header className='bg-black py-4 drop-shadow-md fixed top-0 left-0 right-0 z-50 h-20'>
      <div className='mx-auto px-4 flex items-center justify-between'>
        <div className='text-2xl'>
          <span className='text-yellow-500 font-bold'>E-<span className='text-yellow-200 font-bold'>commerce</span></span>
        </div>

        <div className="relative mr-5">
          <Link href="/cart">
            <ShoppingCartIcon className="h-10 w-10 text-yellow-500" />
           
            {cartQuantity > 0 && (
              <div className="absolute top-0 right-0 rounded-full bg-yellow-200 text-black text-xs w-5 h-5 flex items-center justify-center">
            {cartQuantity}

              </div>
            )}

          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
