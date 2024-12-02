import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import "../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="w-full border-b bg-white sticky top-0">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={require("../assets/images/logo.png")}
              alt="Logo"
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/suppliers"
              className="text-sm no-underline font-medium text-gray-700 hover:text-gray-900"
            >
              Find Suppliers
            </a>

            {/* Service Tags Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Find Service Tags
                <FiChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Service Tag 1
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Service Tag 2
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Service Tag 3
                  </a>
                </div>
              )}
            </div>

            <button className="outline-green-btn">Login / Sign Up</button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="space-y-4 pb-4 md:hidden">
            <a
              href="/suppliers"
              className="block text-sm font-medium no-underline text-gray-700 hover:text-gray-900"
            >
              Find Suppliers
            </a>
            <button
              onClick={toggleDropdown}
              className="flex w-full items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Find Service Tags
              <FiChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 space-y-2">
                <a
                  href="/"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  Service Tag 1
                </a>
                <a
                  href="/"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  Service Tag 2
                </a>
                <a
                  href="/"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  Service Tag 3
                </a>
              </div>
            )}
            <button className="w-full rounded-sm border-1 border-green-600 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green hover:text-white">
              Login / Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
