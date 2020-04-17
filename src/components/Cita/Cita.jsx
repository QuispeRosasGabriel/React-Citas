import React from "react";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Mascota
      <span>{cita.mascota}</span>
    </p>
    <p>
      Propietario
      <span>{cita.propietario}</span>
    </p>
    <p>
      fecha
      <span>{cita.fecha}</span>
    </p>
    <p>
      Sintomas
      <span>{cita.sintomas}</span>
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

export default Cita;
