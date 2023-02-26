import "./styles/reset.css";
import "./styles/style.css";
import palavras from "./palavras" ;
import Letras from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";

function App() {
  const [clicado, setClicado]= useState([""])
  let palavraASerUsada= Math.floor(Math.random()*palavras.length);
  console.log(clicado);
  const palavra=palavras[palavraASerUsada];
  const arrayPalavra = [];
  const [arrayNaTela, setArrayNaTela]= useState([])
  const[erro, setErro]= useState([0]);
 
  function constroiArray() {
      for (let i = 0; i < palavra.length; i++) {
          arrayPalavra.push(palavra[i])
      } 
  }
  function verificaClicado(){
    if(clicado==="foiClicado"){
  constroiArray();}
}

verificaClicado();

  console.log(arrayPalavra);
  return (
    <div className="App">
      <Jogo arrayPalavra={arrayPalavra} clicado={clicado} setClicado={setClicado}
       arrayNaTela={arrayNaTela} setArrayNaTela={setArrayNaTela}/>
      <Letras clicado={clicado} />
    </div>
  );
}

export default App;

