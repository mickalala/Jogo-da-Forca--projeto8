// (imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"

export default function Jogo({ setClicado, clicado, arrayPalavra, arrayNaTela, setArrayNaTela, palavra,erro }) {
    const array= {arrayPalavra}.arrayPalavra
    console.log(array)
    const num= array.length;
    console.log(num)
    const verSeClicou= {clicado}.clicado;
    console.log( verSeClicou );
    const mostra={arrayNaTela}.arrayNaTela;

    console.log("Erronojogo"+erro)
    

    function botaoclicado() {
        setClicado("foiClicado")
       
    }
    console.log(mostra)
   
    function constroiArray() {
        console.log(palavra)
        for (let i = 0; i < (palavra.length)/2; i++) {
            mostra.push(" _ ")
        
        } 
        
    }
    
    function verificaClicado(){
        if(verSeClicou==="foiClicado"){
      constroiArray() ;
    
     }
    }
    verificaClicado()

    return (
        <div className="Jogo">
            {(erro == 0) && (<img src={forca0} className="imageminicial" />)}
            {(erro == 1) && (<img src={forca1} className="imageminicial" />)}
            {(erro == 2) && (<img src={forca2} className="imageminicial" />)}
            {(erro == 3) && (<img src={forca3} className="imageminicial" />)}
            {(erro == 4) && (<img src={forca4} className="imageminicial" />)}
            {(erro == 5) && (<img src={forca5} className="imageminicial" />)}
            {(erro == 6) && (<img src={forca6} className="imageminicial" />)}

            <div>
                <button className={`iniciajogo`} onClick={botaoclicado} > Escolher Palavra</button>
                <p className="palavranatela" >{mostra}</p>
            </div>
        </div>
    )
}