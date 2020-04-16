import React, { Fragment, useState } from "react";
const uuid = require("uuid/v4");

const Formulario = ({ crearCita }) => {
  //Crear state

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const envioCita = (e) => {
    e.preventDefault();
    // validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    // asignar un id
    cita.id = uuid();
    // crear la cita
    crearCita(cita);
    // reinciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h1>Crear cita </h1>
      {error && <p className="alerta-error">Faltan llenar campos</p>}
      <form action="" onSubmit={envioCita}>
        <label htmlFor="">Nombre Mascota: </label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Ingresa el nombre de tu mascota..."
          onChange={handleChange}
          value={mascota}
        />
        <label htmlFor="">Nombre del dueño: </label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Ingresa el nombre del dueño de la mascota..."
          onChange={handleChange}
          value={propietario}
        />
        <label htmlFor="">Fecha: </label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label htmlFor="">Hora: </label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label htmlFor="">Sintomas: </label>
        <textarea
          className="u-full-width"
          name="sintomas"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
