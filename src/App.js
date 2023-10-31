import React, { useState } from 'react';
import RegistroEquipos from './RegistroEquipos';
import ResumenEquipos from './ResumenEquipos';
import ResumenIntegrantes from './ResumenIntegrantes';
import pruebaEquipos from './pruebaEquipos';
import './AppHeader.css';
import logo from './logo.svg'; 



function App() {
  const [equipos, setEquipos] = useState([]);
  const [integrantes, setIntegrantes] = useState([]);

  // Función para agregar un nuevo equipo
  const handleEquipoRegistro = equipo => {
    // Agregar el equipo a la lista de equipos
    setEquipos([...equipos, equipo]);
  };

  // Función para agregar un nuevo integrante
  const handleIntegranteRegistro = integrante => {
    // Agregar el integrante a la lista de integrantes
    setIntegrantes([...integrantes, integrante]);
  };

  return (
    <div className="app-header">Maratón de Programación
      <img src={logo} alt="" className="logo" /> 
      <div className="app-container">
      <RegistroEquipos onEquipoRegistro={handleEquipoRegistro} onIntegranteRegistro={handleIntegranteRegistro} />
      <ResumenEquipos equipos={equipos} />
      </div>

      
    </div>
  );
}

export default App;
