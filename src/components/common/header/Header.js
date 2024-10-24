"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import ActionBar from "./ActionBar";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Anasayfa", href: "#" },
    { name: "Eğitimlerimiz", href: "#" },
    { name: "Öğrenci Kulüpleri", href: "#" },
    { name: "Kurumsal", href: "#" },
    { name: "Kampüs", href: "#" },
    { name: "İletişim", href: "#" },
  ];

  return (
    
      <header className="fixed w-full bg-white bg-opacity-20 shadow-lg backdrop-blur-md" style={{zIndex:"999999"}}>
                <ActionBar/>

        {/* Main header */}
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Logo />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 transition-transform transform rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="space-x-6 font-semibold text-gray-800 ">
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Off-canvas Menu */}
        <div
          className={`absolute h-[100vh] top-0 right-0 w-64 h-full bg-black shadow-xl transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden `} style={{zIndex:"9999999999"}}// Z-index increased to 60
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col p-6 space-y-6 mt-16 text-white font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-300 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
       
        </div>
      </header>
   
  );
};

export default Header;