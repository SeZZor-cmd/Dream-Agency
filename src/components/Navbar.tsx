"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  function toggleNavbar() {
    setisClick(!isClick);
  }

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center p-3 bg-white shadow-md">
      <div className="flex justify-between items-center w-full">
        <button
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black outline-none md:hidden"
          onClick={toggleNavbar}
        >
          <Image
            src={isClick ? "/close.svg" : "/hamburgerMenu.svg"}
            width={30}
            height={30}
            alt="menu icon"
            className="focus:border-none active:border-none"
          />
        </button>
        
        <div className="hidden md:flex md:space-x-2 lg:space-x-4">
          <a href="#Home" className="nav">Home</a>
          <a href="#About" className="nav">About Us</a>
          <a href="#Service" className="nav">Services</a>
          <a href="#Contact" className="nav">Contact Us</a>
        </div>
        <div className="ml-3 text-2xl font-bold md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ">
           Dream Agency
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          <div className='ellipse'>
            <a href="#facebook" className="text-purple-950 hover:text-purple-700"><FontAwesomeIcon icon={faFacebookF} className='social' /></a> 
          </div>
          <div className='ellipse'>
            <a href="#linkedin" className="text-purple-950 hover:text-purple-700"><FontAwesomeIcon icon={faLinkedin} className='social'/></a>
          </div>
          <div className='ellipse'>
            <a href="#instagram" className="text-purple-950 hover:text-purple-700"><FontAwesomeIcon icon={faInstagram} className='social'/></a>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="flex flex-col items-center w-full mt-4 md:hidden">
          <a href="#Home" className="nav" onClick={toggleNavbar}>Home</a>
          <a href="#About" className="nav" onClick={toggleNavbar}>About Us</a>
          <a href="#Service" className="nav" onClick={toggleNavbar}>Services</a>
          <a href="#Contact" className="nav" onClick={toggleNavbar}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
