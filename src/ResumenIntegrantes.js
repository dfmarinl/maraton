import React from 'react';
import Integrante from './Integrante';
const ResumenIntegrantes = ({ integrantes }) => {
  return (
    <div>
      <h2>Resumen de Integrantes</h2>
      <ul>
        {integrantes.map(integrante => (
          <li key={integrante.codigo}>{integrante.nombre}{integrante.materia}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumenIntegrantes;