function App() {
    // ... (código existente)
  
    const [newTeam, setNewTeam] = useState({ name: '' });
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
    const handleTeamChange = (e) => {
      const { name, value } = e.target;
      setNewTeam({ ...newTeam, [name]: value });
    };
  
    const handleAddTeam = () => {
      setTeams([...teams, newTeam]);
      setIsAddingTeam(false);
      setNewTeam({ name: '' });
    };
  
    return (
      <div className="App">
        {/* ... (código existente) */}
        {isAddingTeam ? (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre del equipo"
              value={newTeam.name}
              onChange={handleTeamChange}
            />
            <button onClick={handleAddTeam}>Registrar Equipo</button>
          </div>
        ) : (
          <button onClick={() => setIsAddingTeam(true)}>Agregar Equipo</button>
        )}
      </div>
    );
  }
  export default equipos;