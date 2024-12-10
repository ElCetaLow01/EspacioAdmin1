import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReservarEspacios from './pages/ReservarEspacios';
import Estacionamiento from './pages/Estacionamiento';
import './App.css';

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout><ReservarEspacios /></Layout>} />
        <Route path="/reservar-espacios" element={<Layout><ReservarEspacios /></Layout>} />
        <Route path="/reservar-espacios/estacionamiento" element={<Layout><Estacionamiento /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;