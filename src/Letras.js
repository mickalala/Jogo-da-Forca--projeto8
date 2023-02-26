// (conjunto de botões com as letras)

export default function Letras({clicado,}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const terminadas=[];
    const confirma= {clicado}.clicado;

    function foiSelecionada(letra){
           terminadas.push(letra)
           console.log("fuuui")
    }
  
    return(
        <ul className="letrasnatela">
        {alfabeto.map((alf) => ( 
                <button className="letra" disabled={!(confirma==="foiClicado")|| terminadas.includes(alf) } onClick={()=>foiSelecionada(alf)}>{alf}</button>
        )
        )}
        </ul>
    )


}