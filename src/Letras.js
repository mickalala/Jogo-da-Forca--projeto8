// (conjunto de botões com as letras)

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
    return(
        <ul className="letrasnatela">
        {alfabeto.map((alf) => ( 
                <button className="letra" disabled>{alf}</button>
        )
        )}
        </ul>
    )


}