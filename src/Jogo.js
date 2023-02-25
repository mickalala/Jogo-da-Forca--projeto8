// (imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function Jogo(palavra) {
    console.log(palavra)
    const arrayPalavra = [];
    function constroiArray(palavra) {
        
        for (let i = 0; i < palavra.length; i++) {
            arrayPalavra.push(palavra[i])
            console.log(palavra[i])
        }
    }
    constroiArray(palavra)
    console.log(arrayPalavra)
    return (
        <div className="Jogo">
            <img src={forca0} className="imageminicial" />
            <div>
                <button className="iniciajogo" > Escolher Palavra</button>

            </div>
        </div>
    )
}