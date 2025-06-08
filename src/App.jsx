import "./App.css";
import emojis from "./emojis.js";

function selectRandomElement(arr) {
  const indexElement = Math.floor(Math.random() * arr.length);
  return arr[indexElement];
}

export default function App() {
  const selected = selectRandomElement(emojis);

  const handleCopy = (event) => {
    if (event.target.innerText !== selected.face) {
      alert("Wrong emoji");
    } else if (event.timeStamp > 5000) {
      alert("Too long. Reset and try again!");
    } else {
      alert("🎊 Winner 🎊");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <main>
      <h1>{selected.face}</h1>
      <p>Copy this emoji</p>
      <ul>
        {emojis.map(({ id, face }) => {
          return (
            <li key={id} onCopy={handleCopy}>
              {face}
            </li>
          );
        })}
      </ul>
      <button onClick={handleReset}>RESET</button>
    </main>
  );
}
