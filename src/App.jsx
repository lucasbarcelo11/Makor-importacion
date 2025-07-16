import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className='bg-gray-200 max-w-full'>
      <NavBar />
      {/* gap debajo del navbar y centrado */}
      <main className="pt-20 flex justify-center">
        <Products />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
