import React from "react";
import { NavLink } from "react-router-dom";
import "./ReservaOpciones.css"; // Asegúrate de que la ruta sea correcta

function ReservaOpciones() {
  return (
    <nav className="reserva-opciones">
      <ul>
        <li>
          <NavLink
            to="/reservar-espacios/estacionamiento"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reservar tu espacio aquí!
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ReservaOpciones;
