import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario";
import Cita from "./components/Cita/Cita";

function App() {
  // citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  // use effect para realizar efectos cuando el state cambia
  //igual al ng on init al document.ready
  //similar al componentdidmount y componentdidupdate
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
    console.log(guardarCitas);
  };

  //funcion que elimina unac ita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => {
              return (
                <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
