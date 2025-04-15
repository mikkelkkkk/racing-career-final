import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(13);
  const [stage, setStage] = useState("karting");
  const [race, setRace] = useState(1);
  const [stats, setStats] = useState({
    speed: 1,
    iq: 1,
    charisma: 1,
    fitness: 1,
    feedback: 1,
  });

  const choices = {
    1: [
      { text: "Push hard from Lap 1", effect: { speed: 1 } },
      { text: "Play it smart", effect: { iq: 1 } },
      { text: "Just finish the race", effect: { fitness: 1 } },
    ],
    2: [
      { text: "Defend aggressively", effect: { charisma: 1 } },
      { text: "Stay calm under pressure", effect: { iq: 1 } },
    ],
    3: [
      { text: "Take the wet tire gamble", effect: { feedback: 1 } },
      { text: "Stick with slicks", effect: { speed: 1 } },
    ],
    4: [
      { text: "Challenge your rival", effect: { charisma: 1 } },
      { text: "Ignore and focus", effect: { iq: 1 } },
    ],
    5: [
      { text: "Win it or bin it", effect: { speed: 2 } },
      { text: "Settle for points", effect: { iq: 1 } },
    ],
  };

  const handleChoice = (effect) => {
    const updatedStats = { ...stats };
    Object.keys(effect).forEach(key => {
      updatedStats[key] += effect[key];
    });
    setStats(updatedStats);

    if (race < 5) {
      setRace(race + 1);
    } else {
      setStage("f4");
      setAge(age + 2);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🏁 Racing Career Sim</h1>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Stage:</strong> {stage === "karting" ? `Karting Race ${race}` : "F4 Team Selection"}</p>
      <p><strong>Stats:</strong> Speed: {stats.speed}, IQ: {stats.iq}, Charisma: {stats.charisma}, Fitness: {stats.fitness}, Feedback: {stats.feedback}</p>

      {stage === "karting" && choices[race]?.map((choice, i) => (
        <button key={i} style={{ display: 'block', margin: '1rem 0', padding: '0.75rem 1.5rem', fontSize: '1rem' }} onClick={() => handleChoice(choice.effect)}>
          {choice.text}
        </button>
      ))}

      {stage === "f4" && (
        <div>
          <h2>📋 F4 Team Offers</h2>
          <p>Choose your first formula car team:</p>
          <ul>
            <li>🟥 Prema Racing – Fastest car, high pressure</li>
            <li>🟦 Hitech GP – Midfield potential</li>
            <li>🟨 Trident – Backmarker, build a legacy</li>
          </ul>
          <p>(More coming in the full version!)</p>
        </div>
      )}
    </div>
  );
}

export default App;
