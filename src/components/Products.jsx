import React from 'react';
import Reloj from '../assets/reloj1.jpg';
import Cargador from '../assets/cargador1.jpg';
import Auriculares from '../assets/auri.jpg';

const productos = [
  {
    id: 1,
    titulo: 'Reloj Inteligente H9 Promax Smart Watch',
    imagen: Reloj,
    precio: 1380
  },
  {
    id: 2,
    titulo: 'Auriculares Bluetooth X2 Pro',
    imagen: Auriculares,
    precio: 790
  },
  {
    id: 3,
    titulo: 'Cargador USB-C Rápido 20W',
    imagen: Cargador,
    precio: 230
  }
];

const Products = () => (
  <div className="flex flex-wrap justify-center gap-6 p-6">
    {productos.map(({ id, titulo, imagen, precio }) => (
      <div
        key={id}
        className="dark:bg-gray-900 w-[22rem] flex flex-col items-center p-6 rounded-lg shadow-lg"
      >
        <div className="w-full flex justify-center">
          <img
            src={imagen}
            alt={titulo}
            className="w-[14rem] object-cover rounded"
          />
        </div>
        <h5 className="mt-4 text-center text-white text-2xl font-semibold">
          {titulo}
        </h5>
        <div className="flex items-center justify-between w-full mt-6">
          <span className="text-white text-3xl font-bold">
            ${precio}
          </span>
          <button className="bg-white text-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2">
            Añadir a la cesta
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default Products;
