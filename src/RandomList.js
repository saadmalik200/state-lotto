import "./App.css";
import { useState } from "react";

const numbers49 = [];

for (let i = 1; i < 50; i++) numbers49.push(i);

function App() {
  const [sixnumbers, setSixnumbers] = useState(new Array(6).fill(0));
  const [tzoker, setTzoker] = useState(0);

  const handleGenerate = () => {
    const oldNumbers = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * numbers49.length);
      const randomNumber = numbers49[randomIndex];
      console.log("randomNumber", randomNumber);
      oldNumbers.push(randomNumber);

      numbers49.splice(randomIndex, 1);
    }

    setSixnumbers(oldNumbers); // update the state

    setTzoker(Math.ceil(Math.random() * 10));
  };

  console.log(sixnumbers);
  return (
    <div className="App">
      <div className="allnumbers">
        <div className="sixnumbers">
          {sixnumbers.map((item, idx) => (
            <input key={idx} value={item} disabled />
          ))}
        </div>

        <div className="tzoker">
          <input value={tzoker} disabled />
        </div>
      </div>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}

export default App;
