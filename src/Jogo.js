// (imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"

export default function Jogo({ setClicado, clicado, arrayPalavra, arrayNaTela, setArrayNaTela }) {
    const array= {arrayPalavra}.arrayPalavra
    console.log(array)
    const num= array.length;
    console.log(num)
    const verSeClicou= {clicado}.clicado;
    console.log( verSeClicou );
    const mostra={arrayNaTela}.arrayNaTela;

    function botaoclicado() {
        setClicado("foiClicado")
         constroiUnderlines()
    }
    console.log(mostra)

    function constroiUnderlines() {
        console.log("AAAAAAAAAAAAAAAAAAAAAAA");
        const novoarray=[...mostra]
       for(let i=0;i<num;i++){
           novoarray.push(" _ ")
        }
        setArrayNaTela(novoarray)
    }

    return (
        <div className="Jogo">
            <img src={forca0} className="imageminicial" />
            <div>
                <button className={`iniciajogo`} onClick={botaoclicado} > Escolher Palavra</button>
                <p className="palavranatela">{mostra}</p>
            </div>
        </div>
    )
}