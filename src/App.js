import React, { useState } from 'react';

function App() {
  const [stage, setStage] = useState("karting");
  const [stats, setStats] = useState({
    speed: 1,
    iq: 1,
    charisma: 1,
    feedback: 1,
    fitness: 1,
  });

  const handleChoice = () => {
    setStats(prev => ({ ...prev, speed: prev.speed + 1 }));
    setStage("f4");
  };

  return (
    <div style={{ color: 'white', background: '#121212', height: '100vh', padding: '2rem' }}>
      <h1>Racing Career Sim</h1>
      <p>Stage: {stage}</p>
      <p>Speed: {stats.speed}</p>
      {stage === "karting" && (
        <button onClick={handleChoice}>Complete Karting Season</button>
      )}
      {stage === "f4" && <p>Welcome to F4!</p>}
    </div>
  );
}

export default App;