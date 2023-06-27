import Profile from "./Profile";
import './Style.css'

const result = prompt(`Qui es-tu ?`)

function App() {
  return (
    <header>
      <div class="banner">
        <h1>Bonjour {result}</h1>
        <Profile />
      </div>
    </header>
  );
}

export default App;
