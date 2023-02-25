import "./styles/reset.css";
import "./styles/style.css";
import palavras from "./palavras" ;
import Letras from "./Letras";
import Jogo from "./Jogo";

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

