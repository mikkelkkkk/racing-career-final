
import React, { useState } from 'react';

const racesPerTier = {
  karting: 15,
  f4: 15,
  f3: 15,
  f2: 15,
  f1: 22
};

function App() {
  const [stage, setStage] = useState("karting");
  const [race, setRace] = useState(1);
  const [age, setAge] = useState(13);
  const [stats, setStats] = useState({ speed: 72, iq: 68, charisma: 55, fitness: 70, feedback: 60 });
  const [points, setPoints] = useState(0);

  const handleChoice = (type) => {
    let updatedStats = { ...stats };
    if (type === "slicks") updatedStats.iq += 1;
    if (type === "wets") updatedStats.feedback += 1;
    if (type === "inters") updatedStats.speed += 1;

    const newPoints = points + (Math.floor(Math.random() * 10) + 6);
    const nextRace = race + 1;

    if (nextRace > racesPerTier[stage]) {
      if (stage === "karting") {
        setStage("f4"); setRace(1); setAge(15);
      } else if (stage === "f4") {
        setStage("f3"); setRace(1); setAge(16);
      } else if (stage === "f3") {
        setStage("f2"); setRace(1); setAge(17);
      } else if (stage === "f2") {
        setStage("f1"); setRace(1); setAge(18);
      } else {
        setRace(1);
      }
    } else {
      setRace(nextRace);
    }

    setStats(updatedStats);
    setPoints(newPoints);
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'Segoe UI' }}>
      <h1>🏎️ Racing Career Sim</h1>
      <h2>{stage.toUpperCase()} – Race {race}/{racesPerTier[stage]}</h2>
      <p><strong>Age:</strong> {age} | <strong>Points:</strong> {points}</p>

      <div>
        <h3>📊 Stats</h3>
        <ul>
          <li>Speed: {stats.speed}</li>
          <li>Race IQ: {stats.iq}</li>
          <li>Charisma: {stats.charisma}</li>
          <li>Feedback: {stats.feedback}</li>
          <li>Fitness: {stats.fitness}</li>
        </ul>
      </div>

      <h3>🏁 Scenario: Rain is expected. Choose your tire strategy:</h3>
      <button onClick={() => handleChoice("slicks")}>🔧 Stick with slicks</button>
      <button onClick={() => handleChoice("wets")}>🌧 Ask for wets</button>
      <button onClick={() => handleChoice("inters")}>🎲 Try inters</button>
    </div>
  );
}

export default App;
