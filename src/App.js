import "./styles/reset.css";
import "./styles/style.css";
import palavras from "./palavras" ;
import Letras from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";

function App() {
  const [clicado, setClicado]= useState("")
  let palavraASerUsada= Math.floor(Math.random()*palavras.length);
  console.log(clicado);
  const palavra=palavras[palavraASerUsada];
  const arrayPalavra = [];
  const [arrayNaTela, setArrayNaTela]= useState([])
  const[erro, setErro]= useState([0]);
 console.log(erro +"esse éoerro")
 

  console.log(arrayPalavra);
  return (
    <div className="App">
      <Jogo arrayPalavra={arrayPalavra} clicado={clicado} setClicado={setClicado}
       arrayNaTela={arrayNaTela} setArrayNaTela={setArrayNaTela} palavra={palavra}
       erro={erro}/>
      <Letras clicado={clicado} palavra={palavra} setErro={setErro} erro={erro}/>
    </div>
  );
}

export default App;

