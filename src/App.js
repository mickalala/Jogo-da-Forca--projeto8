import "./styles/reset.css";
import "./styles/style.css";
import palavras from "./components/palavras" ;
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";

function App() {
  const palavraASerUsada= Math.floor(Math.random()*palavras.length)
  console.log(palavras[palavraASerUsada])
  return (
    <div className="App">
      <Jogo palavras={palavras[palavraASerUsada]}/>
      <Letras/>
    </div>
  );
}

export default App;

