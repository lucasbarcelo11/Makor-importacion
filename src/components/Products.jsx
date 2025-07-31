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
      "Reloj con múltiples funciones, Hotsale H9 PRO MAX Smart Watch Serie 9 BT Llamadas Cargador inalámbrico Hombres Mujeres Sport Fitness H9 Smartwatch",
  },
  {
    id: 2,
    titulo: "Auriculares Bluetooth X2 Pro",
    imagen: Auriculares,
    precio: 790,
    descripcion:
      "Auriculares inalámbricos Factory S90 TWS con Bluetooth 5.3, sonido estéreo HiFi y micrófono dual con reducción de ruido. Ofrecen hasta 4 horas de música, carga rápida en 1 hora y 200 horas en espera. Disponibles en blanco, negro, rosa y verde hielo. Compactos, con control táctil y llamadas binaurales.",
  },
  {
    id: 3,
    titulo: "Cargador USB-C Rápido 20W",
    imagen: Cargador,
    precio: 230,
    descripcion:
      "Paquete de caja 120W Aleación de zinc Uno a tres PC01 Cable DE DATOS Carga súper rápida Interfaz tres en uno Cable de carga de teléfono 1,2 m.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section>
      <div className="text-center mt-6 mb-4">
  <h2 className="text-3xl font-serif font-bold text-white">Catálogo</h2>
</div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        
        {productos.map((producto) => (
          <div
            key={producto.id}
            onClick={() => setSelectedProduct(producto)}
            className="dark:bg-gray-900 w-[18rem] flex flex-col items-center p-4 rounded-lg shadow-lg cursor-pointer transition hover:scale-105"
          >
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="w-[11rem] object-cover rounded"
            />
            <h5 className="mt-3 text-center text-white text-xl font-semibold">
              {producto.titulo}
            </h5>
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-white text-xl font-bold">
                ${producto.precio}
              </span>
              <button className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 hover:ring-4 hover:ring-green-300 hover:ring-offset-2">
                <FaWhatsapp className="text-white text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="dark:bg-gray-900 w-[90%] max-w-sm pt-8 pb-4 px-4 rounded-lg relative shadow-xl text-white">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-white hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.imagen}
              alt={selectedProduct.titulo}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold mb-2">
              {selectedProduct.titulo}
            </h3>
            <p className="text-xs mb-3">{selectedProduct.descripcion}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                ${selectedProduct.precio}
              </span>
              <button className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 hover:ring-4 hover:ring-green-300 hover:ring-offset-2">
                <FaWhatsapp className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
