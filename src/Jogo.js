// (imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"

export default function Jogo({ arrayNaTela, botaoclicado,erro, palavra, acerto }) {
  
    const mostra={arrayNaTela}.arrayNaTela;
 
    let palavracomp=""

for(let i=0;i<mostra.length;i++){
palavracomp+=mostra[i];
}
console.log("lá se vai palavra comp")
console.log(palavracomp)

    return (
        <div className="Jogo">
            {(erro == 0) && (<img src={forca0} className="imageminicial" data-test="game-image"/>)}
            {(erro == 1) && (<img src={forca1} className="imageminicial" data-test="game-image"/>)}
            {(erro == 2) && (<img src={forca2} className="imageminicial" data-test="game-image"/>)}
            {(erro == 3) && (<img src={forca3} className="imageminicial" data-test="game-image"/>)}
            {(erro == 4) && (<img src={forca4} className="imageminicial" data-test="game-image"/>)}
            {(erro == 5) && (<img src={forca5} className="imageminicial" data-test="game-image"/>)}
            {(erro == 6) && (<img src={forca6} className="imageminicial" data-test="game-image"/>)}

            <div>
                <button className={`iniciajogo`} onClick={botaoclicado} data-test="choose-word"> Escolher Palavra</button>
               { (erro !== 6)&& (palavracomp!==palavra) && (<p className="palavranatela" data-test="word">{mostra}</p>)}
               { (erro == 6) && (<p className="palavranatela vermelha" data-test="word">{palavra}</p>)}
               { (erro !== 6) && (palavracomp==palavra) && (<p className="palavranatela verde" data-test="word">{palavra}</p>)}
            </div>
        </div>
    )
}