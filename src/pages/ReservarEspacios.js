import React from 'react';
import { Outlet } from 'react-router-dom';
import BotonesReservas from '../components/BotonesReservas';
import Contact from '../components/Contact';

function ReservarEspacios() {
  return (
    <div>      
      <BotonesReservas />
      <Outlet />
      <Contact />
    </div>
  );
}

export default ReservarEspacios;