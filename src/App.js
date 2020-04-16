import React, { useState } from "react";
import Formulario from "./components/Formulario/Formulario";

function App() {
  const [citas, guardarCitas] = useState([]);

  // funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
    console.log(guardarCitas);
  };

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
