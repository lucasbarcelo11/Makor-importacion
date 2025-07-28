import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Products from "./components/Products";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-900">
      <NavBar />

      <main className="flex-grow">
        <Products />
      </main>

      <Footer />
    </div>
  );
}

export default App;
