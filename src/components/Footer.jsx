import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        <h3 className="text-lg font-semibold">
          Makor Importaciones
        </h3>
        <p className="mt-2 md:mt-0">
          Ventas al por Mayor
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
};