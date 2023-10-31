import React from 'react';
import Equipo from './Equipo';
import './ResumenEquipos.css'; 
const ResumenEquipos = ({ equipos }) => {
  return (
    <div className="resumen-equipos-container">       
    <h2>Resumen de Equipos</h2>
      <ul>
        {equipos.map(equipo => (
          <li key={equipo.nombre}>
            {equipo.nombre} - Integrantes: {equipo.integrantes.map(i => i.nombre).join(', ')} - Categorías: {equipo.categorías.join(', ')} 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumenEquipos;
