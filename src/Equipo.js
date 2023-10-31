import React from 'react';
import Integrante from './Integrante';

const Equipo = ({ nombre, categorias, integrantes }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Categorías: {categorias.join(', ')}</p>
      <h3>Integrantes:</h3>
      <ul>
        {integrantes.map(integrante => (
          <li key={integrante.codigo}>{integrante.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Equipo;