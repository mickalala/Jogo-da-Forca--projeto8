// (conjunto de botões com as letras)

export default function Letras({clicado,palavra,setErro,erro}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const terminadas=[];
    const confirma= {clicado}.clicado;
    console.log(palavra)
    let contador=parseInt(erro);

    function foiSelecionada(letra){
           terminadas.push(letra)
           console.log("fuuui")
           if(palavra.includes(letra)){
            console.log("acertooou")
           }else{
            console.log("errougatah")
            setErro(contador+1)
           }
    }
  
    return(
        <ul className="letrasnatela">
        {alfabeto.map((alf,index) => ( 
                <button key={index} className="letra" disabled={!(confirma==="foiClicado")|| terminadas.includes(alf) } onClick={()=>foiSelecionada(alf)}>{alf}</button>
        )
        )}
        </ul>
    )


}