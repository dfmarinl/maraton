import React from 'react';

const Integrante = ({ nombre, codigo, materia }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Código: {codigo}</p>
      <p>Materia: {materia}</p>
    </div>
  );
};

export default Integrante;