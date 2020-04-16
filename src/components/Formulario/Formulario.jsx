import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h1>Crear cita </h1>

      <form action="">
        <label htmlFor="">Nombre Mascota: </label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Ingresa el nombre de tu mascota..."
        />
        <label htmlFor="">Nombre del dueño: </label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Ingresa el nombre del dueño de la mascota..."
        />
        <label htmlFor="">Fecha: </label>
        <input type="date" name="fecha" className="u-full-width" />
        <label htmlFor="">Hora: </label>
        <input type="time" name="time" className="u-full-width" />
        <label htmlFor="">Sintomas: </label>
        <textarea
          className="u-full-width"
          name="sintomas"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
