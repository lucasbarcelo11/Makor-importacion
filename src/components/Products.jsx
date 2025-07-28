import React, { useState, useEffect } from "react";
import Reloj from "../assets/reloj1.jpg";
import Cargador from "../assets/cargador1.jpg";
import Auriculares from "../assets/auri.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const productos = [
  {
    id: 1,
    titulo: "Reloj Inteligente H9 Promax Smart Watch",
    imagen: Reloj,
    precio: 1380,
    descripcion:
      "Reloj con múltiples funciones, resistente al agua y batería de larga duración.",
  },
  {
    id: 2,
    titulo: "Auriculares Bluetooth X2 Pro",
    imagen: Auriculares,
    precio: 790,
    descripcion: "Sonido envolvente y estuche de carga rápida incluido.",
  },
  {
    id: 3,
    titulo: "Cargador USB-C Rápido 20W",
    imagen: Cargador,
    precio: 230,
    descripcion:
      "Compatible con todos los dispositivos modernos, carga segura y rápida.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            onClick={() => setSelectedProduct(producto)}
            className="dark:bg-gray-900 w-[22rem] flex flex-col items-center p-6 rounded-lg shadow-lg cursor-pointer transition hover:scale-105"
          >
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="w-[14rem] object-cover rounded"
            />
            <h5 className="mt-4 text-center text-white text-2xl font-semibold">
              {producto.titulo}
            </h5>
            <div className="flex items-center justify-between w-full mt-6">
              <span className="text-white text-3xl font-bold">
                ${producto.precio}
              </span>
              <button className="bg-green-600 rounded-full w-14 h-14 flex items-center justify-center">
                <FaWhatsapp className="text-white text-3xl" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="dark:bg-gray-900 w-[90%] max-w-md pt-10 pb-6 px-6 rounded-lg relative shadow-xl text-white">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-white hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.imagen}
              alt={selectedProduct.titulo}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{selectedProduct.titulo}</h3>
            <p className="text-sm mb-4">{selectedProduct.descripcion}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">
                ${selectedProduct.precio}
              </span>
              <button className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600">
                <FaWhatsapp className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
