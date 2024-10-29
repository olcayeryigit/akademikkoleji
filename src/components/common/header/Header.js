"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import ActionBar from "./ActionBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "ANASAYFA", href: "#", hasDropdown: false },
    { name: "EĞİTİMLERİMİZ", hasDropdown: true },
    { name: "ÖĞRENCİ KULÜPLERİ", hasDropdown: true },
    { name: "KURUMSAL", hasDropdown: true },
    { name: "KAMPÜS", hasDropdown: true },
    { name: "İLETİŞİM", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 w-full text-white transition-colors duration-300 bg-gray-800  ${
        isScrolled ? "bg-gray-900" : "md:bg-transparent"
      }`}
      style={{ zIndex: "999999" }}
    >
      <div
        className={`transition-all duration-[1s] ease-in-out overflow-hidden ${
          isScrolled ? " opacity-0 max-h-0" : " opacity-100 max-h-20"
        }`}
      >
        <ActionBar />
      </div>

      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

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

        <div className="hidden lg:flex items-center space-x-8">
          <nav className="space-x-6 font-medium relative">
            {links.map((link, index) => (
              <div key={link.name} className="inline-block relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center focus:outline-none"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        activeDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href} className="flex items-center">
                    {link.name}
                  </Link>
                )}
                {link.hasDropdown && activeDropdown === index && (
                  <div className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-4 min-w-[200px]">
                    <p>Dropdown content for {link.name}</p>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div
        className={`absolute h-[100vh] top-0 right-0 w-64 h-full bg-black shadow-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        style={{ zIndex: "9999999999" }}
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
          {links.map((link, index) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center focus:outline-none"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${
                      activeDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              ) : (
                <Link href={link.href} className="flex items-center">
                  {link.name}
                </Link>
              )}
              {link.hasDropdown && activeDropdown === index && (
                <div className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-4 min-w-[200px]">
                  <p>Dropdown content for {link.name}</p>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
