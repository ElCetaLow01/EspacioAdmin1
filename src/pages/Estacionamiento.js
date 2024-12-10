import React, { useState } from 'react';
import "./Estacionamiento.css";

function ReservaEspacios() {
  const [tipoReserva, setTipoReserva] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [nombre, setNombre] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [contacto, setContacto] = useState('');
  const [notas, setNotas] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Obtener la fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0]; // Ej: '2024-12-10'

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!tipoReserva) {
      setMensaje('Por favor, selecciona qué quieres agendar.');
      return;
    }

    if (!fecha || !horaInicio || !horaFin || !nombre || !departamento) {
      setMensaje('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch(`/api/reservar-${tipoReserva.toLowerCase()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipoReserva,
          fecha,
          horaInicio,
          horaFin,
          nombre,
          departamento,
          contacto,
          notas,
        }),
      });

      if (response.ok) {
        setMensaje('Reserva realizada con éxito.');
        setTipoReserva('');
        setFecha('');
        setHoraInicio('');
        setHoraFin('');
        setNombre('');
        setDepartamento('');
        setContacto('');
        setNotas('');
      } else {
        setMensaje('Error al realizar la reserva. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Ha ocurrido un error inesperado.');
    }
  };

  return (
    <section className="content sau">
      <form id="form-reserva" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo-reserva">¿Qué quieres agendar?</label>
          <select
            id="tipo-reserva"
            value={tipoReserva}
            onChange={(e) => setTipoReserva(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Estacionamiento">Estacionamiento</option>
            <option value="Multicancha">Multicancha</option>
            <option value="Quincho">Quincho</option>
            <option value="Sala de Eventos">Sala de Eventos</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            min={today} // Aquí se establece el valor mínimo para la fecha
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora-inicio">Hora de Inicio:</label>
          <input
            type="time"
            id="hora-inicio"
            required
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora-fin">Hora de Fin:</label>
          <input
            type="time"
            id="hora-fin"
            required
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            required
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contacto">Contacto:</label>
          <input
            type="tel"
            id="contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notas">Notas:</label>
          <textarea
            id="notas"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Reservar
        </button>
        <div id="mensaje">{mensaje}</div>
      </form>
    </section>
  );
}

export default ReservaEspacios;
