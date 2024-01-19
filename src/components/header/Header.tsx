import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      {/* Parte do Logo */}
      <div className="logo">xD</div>

      {/* Parte dos Quatro Textos */}
      <div className="menu flex gap-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 1
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 2
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 3
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 4
        </a>
      </div>

      {/* Parte dos Dois Textos */}
      <div className="actions flex gap-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 5
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Link 6
        </a>
      </div>
    </header>
  );
};

export default Header;
