
import React, { useState } from 'react';

function App() {
  const [stage, setStage] = useState("karting");
  const [age, setAge] = useState(13);
  const [race, setRace] = useState(1);
  const [stats, setStats] = useState({ speed: 72, iq: 68, charisma: 55, fitness: 70, feedback: 60 });

  const handleChoice = () => {
    const nextRace = race + 1;
    if (stage === "karting" && nextRace > 5) {
      setStage("f4");
      setAge(15);
      setRace(1);
    } else if (stage === "f4" && nextRace > 8) {
      setStage("f3");
      setAge(16);
      setRace(1);
    } else if (stage === "f3" && nextRace > 10) {
      setStage("f2");
      setAge(17);
      setRace(1);
    } else if (stage === "f2" && nextRace > 12) {
      setStage("f1");
      setAge(18);
      setRace(1);
    } else {
      setRace(nextRace);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'Segoe UI' }}>
      <h1>🏎️ Racing Career Sim</h1>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Stage:</strong> {stage.toUpperCase()} - Race {race}</p>
      <h2>📊 Stats</h2>
      <ul>
        <li>Speed: {stats.speed}</li>
        <li>Race IQ: {stats.iq}</li>
        <li>Charisma: {stats.charisma}</li>
        <li>Fitness: {stats.fitness}</li>
        <li>Feedback: {stats.feedback}</li>
      </ul>
      <h3>Race scenario: Unexpected rain is forecast mid-race. What do you do?</h3>
      <button onClick={handleChoice}>🔧 Stick with slicks</button>
      <button onClick={handleChoice}>🌧 Ask for wets</button>
      <button onClick={handleChoice}>🎲 Try inters</button>
    </div>
  );
}

export default App;
