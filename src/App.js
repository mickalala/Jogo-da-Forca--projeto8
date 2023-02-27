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
  const [palavra, setPalavra] = useState("");
  
  const arrayPalavra = [];
  const [arrayNaTela, setArrayNaTela]= useState([])
  const[erro, setErro]= useState([0]);
 console.log(erro +"esse éoerro")
 const novoarray=[]


 function constroiArray() {
  console.log("chegou aqui")
  console.log(palavra)
  const teste = palavras[palavraASerUsada]
    for (let i = 0; i < teste.length; i++) {
        arrayPalavra.push(teste[i])
        novoarray.push(" _ ")
    }
    setArrayNaTela(novoarray)
    console.log("o array palavra e o a novo array são: ")
    console.log(arrayPalavra)    
    console.log(novoarray)
}
 
 function botaoclicado() {
  
  setPalavra(palavras[palavraASerUsada])
  console.log('atualizamos a palavra: ')
  console.log(palavra)
 
  setClicado("foiClicado")

  constroiArray()
  
}

  return (
    <div className="App">
      <Jogo arrayPalavra={arrayPalavra} clicado={clicado} setClicado={setClicado}
       arrayNaTela={arrayNaTela} setArrayNaTela={setArrayNaTela} botaoclicado={botaoclicado}
       erro={erro}
       />
      <Letras clicado={clicado} palavra={palavra} setErro={setErro} erro={erro}/>
    </div>
  );
}

export default App;

