import React, { useState, useEffect } from "react";
import Reloj from "../assets/H9Negro.jpeg";
import Reloj2 from "../assets/reloj1.jpg";
import Cargador from "../assets/cargador1.jpg";
import Cargador2 from "../assets/cargador2.jpg";
import Auriculares from "../assets/S90.jpeg";
import Auriculares2 from "../assets/S90N.jpeg";
import AuriCable from "../assets/AuriC.jpeg";
import CargadorC from "../assets/CargadorC.jpeg";
import CargadorC1 from "../assets/CargadorC1.jpeg";
import CargadorIphone from "../assets/CargadorIphonepro.jpg";
import CargadorIph from "../assets/CargadorIph.jpeg";
import D18 from "../assets/D18.jpeg";
import D18a from "../assets/d18A.jpeg";
import En1P from "../assets/3En1P.jpeg";
import { IoClose } from "react-icons/io5";

const productos = [
  {
    id: 1,
    titulo: "Reloj Inteligente H9 Promax Smart Watch",
    imagen: Reloj,
    imagen2: Reloj2,
    precio: 1380,
    descripcion:
      "Reloj con múltiples funciones, H9 PRO MAX Smart Watch Serie 9 BT Llamadas Cargador inalámbrico Hombres Mujeres Sport Fitness",
  },
  {
    id: 2,
    titulo: "Auriculares Bluetooth X2 Pro",
    imagen: Auriculares,
    imagen2: Auriculares2,
    precio: 790,
    descripcion:
      "Auriculares inalámbricos S90 TWS Premium con Bluetooth 5.3, sonido estéreo HiFi y micrófono dual con reducción de ruido. Ofrecen hasta 4 horas de música, carga rápida en 1 hora y 200 horas en espera. Disponibles en blanco, negro y rosa. Compactos, con control táctil y llamadas binaurales.",
  },
  {
    id: 3,
    titulo: "Cargador 3 en 1 Rápido 20W",
    imagen: Cargador,
    imagen2: Cargador2,
    precio: 230,
    descripcion:
      "Paquete de caja 120W Aleación de zinc Uno a tres, Cable DE DATOS Carga súper rápida Interfaz tres en uno Cable de carga de teléfono 1,2 m.",
  },
  {
    id: 4,
    titulo: "AuriCable",
    imagen: AuriCable,
    imagen2: AuriCable,
    precio: 0,
    descripcion: "Auriculares cableados, puerto AUX, Color Blanco y Negro",
  },
  {
    id: 5,
    titulo: "Ficha + Cable Tipo C Carga Rapida",
    imagen: CargadorC,
    imagen2: CargadorC1,
    precio: 0,
    descripcion:
      "Cargador de 27W y cable de datos de 6A, Cargador Super Flash 27W",
  },
  {
    id: 6,
    titulo: "Ficha + Cable para Iphone Lightning",
    imagen: CargadorIphone,
    imagen2: CargadorIph,
    precio: 0,
    descripcion: "Cargador de 10.5W , Cargador Super Flash",
  },
  {
    id: 7,
    titulo: "Reloj Inteligente D18",
    imagen: D18a,
    imagen2: D18,
    precio: 0,
    descripcion:
      "Reloj inteligente impermeable podómetro rastreador de actividad reloj inteligente con presión arterial oxígeno en sangre",
  },
  {
    id: 8,
    titulo: "Cargador 3 en 1 Rápido Premium",
    imagen: En1P,
    imagen2: En1P,
    precio: 0,
    descripcion:
      "Cable de datos de uno a tres de aleación de zinc de 120W Carga súper rápida interfaz tres en uno",
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
    <section className="mt-14 mb-14">
      <div className="text-center mt-6 mb-4">
        <h2 className="text-blue-500 text-4xl font-extrabold">Catálogo</h2>
      </div>
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {productos.map((producto) => (
              <div
                key={producto.id}
                onClick={() => setSelectedProduct(producto)}
                className="bg-gray-800 w-[18rem] flex flex-col items-center p-4 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={producto.imagen}
                  alt={producto.titulo}
                  className="w-[11rem] object-cover rounded"
                />
                <h5 className="mt-3 text-center text-white text-xl font-semibold">
                  {producto.titulo}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-[90%] max-w-sm pt-8 pb-4 px-4 rounded-lg relative shadow-xl text-white">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-white hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.imagen2}
              alt={selectedProduct.titulo}
              className="w-auto h-auto object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold mb-2">{selectedProduct.titulo}</h3>
            <p className="text-xs mb-3">{selectedProduct.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
