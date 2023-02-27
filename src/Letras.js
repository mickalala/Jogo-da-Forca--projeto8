// (conjunto de botões com as letras)

export default function Letras({clicado,palavra,setErro,erro,letraterminada,setLetraterminada,setNovoarray,novoarray, acerto, setAcerto}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    const confirma= {clicado}.clicado;
    console.log(palavra)
    let contador=parseInt(erro);
   const novaletraterminada=[...letraterminada]
   console.log("Aqui vai o novoarray no letras")
   console.log(novoarray);
   const arraydenovo=novoarray;
   let match="";
   let contagemdeerro=0;
   let contagemdeacerto=0;
   
   

    function foiSelecionada(letra){
        contagemdeerro=0;
        console.log("agoravai contagemde acerto")
        console.log(contagemdeacerto)
           novaletraterminada.push(letra)
           setLetraterminada(novaletraterminada)
           console.log("fuuui")
           for(let i=0; i<palavra.length;i++){
           if(palavra[i]===(letra)){
            match+=i;
            console.log("acertooou")
           }else{
            contagemdeerro++;
           }
        }
           for(let i=0; i<match.length;i++){
            let posicao=match[i];
            arraydenovo[posicao]=letra;
            contagemdeacerto+=match.length;
           }
           console.log(arraydenovo)
          if(contagemdeerro===palavra.length){
      
           setErro(contador+1)
        }
    
        if(contagemdeacerto===palavra.length){
            alert("deubom")
            setAcerto("deubom")
        }
        console.log(match)
    }
let verifica=""
for(let i=0;i<arraydenovo.legth;i++){
verifica+=arraydenovo[i]
}

    return(
        <ul className="letrasnatela">
        {alfabeto.map((alf,index) => ( 
                <button data-test="letter" key={index} className={`letra ${(letraterminada.includes(alf) || confirma !== "foiClicado" || contador>=6 || verifica==palavra )? "disable":""}`} disabled={!(confirma==="foiClicado")|| letraterminada.includes(alf) || contador>= 6 || acerto==="deubom"} onClick={()=>foiSelecionada(alf)}>{alf}</button>
        )
        )}
        </ul>
    )


}