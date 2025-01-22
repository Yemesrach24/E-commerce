import React from 'react';
//import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';  
const Header = () => {
  return (
    <header className='bg-slate-400 py-4 drop-shadow-md'>  
      <div className='mx-auto  px-4 flex items-center justify-between '>

        <div>
          <span className='text-black font-bold'>E-<span className='text-white font-bold'>commerce</span></span>
        </div>

        <div className='hidden sm:flex space-x-10'>
          <p>Home</p>
          <p>About us</p>
          <p>Latest</p>
        </div>

        <div>
          {/* Use Link for navigation */}
          <Link href="/cart">

              <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
        
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
