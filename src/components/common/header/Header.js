"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import Divider from "./Divider";
import ActionBar from "./ActionBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-50 shadow-md">
      <Divider />
      <ActionBar />
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900 focus:outline-none transition-transform duration-300 hover:scale-110"
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
        <div className={`hidden lg:flex items-center space-x-8`}>
          <nav className="text-blue-900 font-semibold space-x-6">
            <Link href="#" className="">
              Anasayfa
            </Link>
            <Link href="#" className="">
              Eğitimlerimiz
            </Link>
            <Link href="#" className="">
              Öğrenci Kulüpleri
            </Link>
            <Link href="#" className="">
              Kurumsal
            </Link>
            <Link href="#" className="">
              Kampüs
            </Link>
            <Link href="#" className="">
              İletişim
            </Link>
          </nav>
          <span className="">
              <Image
                src="/img/logo/yil.png"
                width={90}
                height={90}
                alt="15 Yıl"
                className="object-cover"
              />        
          </span>
             
                </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="bg-blue-100 shadow-md rounded-lg p-4 mt-2">
          <div className="flex flex-col space-y-4 text-blue-900 font-medium">
            <Link href="#" className="">
              Anasayfa
            </Link>
            <Link href="#" className="">
              Eğitimlerimiz
            </Link>
            <Link href="#" className="">
              Öğrenci Kulüpleri
            </Link>
            <Link href="#" className="">
              Kurumsal
            </Link>
            <Link href="#" className="">
              Kampüs
            </Link>
            <Link href="#" className="">
              İletişim
            </Link>
                     <Image
                src="/img/logo/yil.png"
                width={108}
                height={108}
                alt="15 Yıl"
                className="object-cover"
              />

        
       
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;