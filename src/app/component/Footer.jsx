import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-black py-4 mt-10 text-center text-white">
      
     <span className='font-bold text-yellow-300 text-2xl'>Follow</span> <span className="font-bold text-yellow-200 text-2xl">Us</span>

      <div className="flex justify-center space-x-4 m-5">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="hover:scale-125 " icon={faTwitter} size="2x" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="hover:scale-125 " icon={faFacebook} size="2x" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="hover:scale-125 " icon={faInstagram} size="2x" />
        </a>
      </div>
      
      <div className=" flex justify-center space-x-4 m-5"> 
      
      <Link href="/aboutUs">
        <p className='text-yellow-300 hover:text-yellow-700'> About us </p>
      </Link>

      <Link href="/contactUs">  
        <p className='text-yellow-300 hover:text-yellow-700'> Contact us </p>
      </Link>
     

      </div>
     

      <p className="text-center text-sm">&copy; {new Date().getFullYear()} E-commerce. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
