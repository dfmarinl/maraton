import React, { useState } from 'react';
import Integrante from './Integrante'; 
import './RegistroEquipos.css'; 

const RegistroEquipos = ({ onEquipoRegistro }) => {
    
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [integrantes, setIntegrantes] = useState([]);

  // Estado local para el nuevo integrante
  const [nuevoIntegrante, setNuevoIntegrante] = useState({
    nombre: '',
    codigo: '',
    materia: '',
  });

  // Función para agregar un integrante al equipo
  const agregarIntegrante = () => {
    // Verificar que los campos del nuevo integrante estén completos
    if (nuevoIntegrante.nombre && nuevoIntegrante.codigo && nuevoIntegrante.materia) {
      // Agregar el nuevo integrante a la lista de integrantes
      setIntegrantes([...integrantes, nuevoIntegrante]);

      // Limpiar los campos del nuevo integrante
      setNuevoIntegrante({
        nombre: '',
        codigo: '',
        materia: '',
      });
    }
  };

  // Función para registrar el equipo
  const registrarEquipo = () => {
    // Lógica para registrar el equipo, pasando el nombre del equipo, categorías y lista de integrantes al componente padre
    onEquipoRegistro({
      nombre: nombreEquipo,
      categorías: categorias, 
      integrantes,
    });
    
    setIntegrantes([]);
    
  };

  return (
    <div className="registro-equipos-container"> {/* Agrega la clase CSS */}
      <h2>Registro de Equipos</h2>
      <input type="text" placeholder="Nombre del equipo" value={nombreEquipo} onChange={e => setNombreEquipo(e.target.value)} />

      {/* Campo de selección para las categorías */}
      <label>Categorías:</label>
      <select
        multiple
        value={categorias}
        onChange={e => setCategorias(Array.from(e.target.selectedOptions, option => option.value))}
      >
        <option value="basica">Básica</option>
        <option value="intermedia">Intermedia</option>
        <option value="avanzada">Avanzada</option>
        <option value="">Elite</option>
      </select>

      {/* Formulario para agregar un integrante */}
      <form>
        <h3>Registrar Integrante</h3>
        <label>Nombre:
          <input
            type="text"
            value={nuevoIntegrante.nombre}
            onChange={e => setNuevoIntegrante({ ...nuevoIntegrante, nombre: e.target.value })}
          />
        </label>
        <label>Código:
          <input
            type="text"
            value={nuevoIntegrante.codigo}
            onChange={e => setNuevoIntegrante({ ...nuevoIntegrante, codigo: e.target.value })}
          />
        </label>
        <label>Materia:
          <input
            type="text"
            value={nuevoIntegrante.materia}
            onChange={e => setNuevoIntegrante({ ...nuevoIntegrante, materia: e.target.value })}
          />
        </label>
        <button type="button" onClick={agregarIntegrante}>Agregar Integrante</button>
      </form>

      {/* Mostrar la lista de integrantes */}
      <h3>Lista de Integrantes del equipo</h3>
      {integrantes.map((integ, index) => (
        <Integrante
          key={index}
          nombre={integ.nombre}
          codigo={integ.codigo}
          materia={integ.materia}
        />
      ))}

      {/* Categorías y lista de integrantes */}
      <button onClick={registrarEquipo}>Registrar Equipo</button>
    </div>
  );
};


  
export default RegistroEquipos;
