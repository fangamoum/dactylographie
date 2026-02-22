
function TexteA_Taper({texte, motsSaisis , motCourantIndex}){
    // on decoupe le texte en mots

    const mots = texte.split(" ");

    return(
        <p>
            {mots.map((mot , index)=> {
                let classe = "" ; 

                if(index < motsSaisis.length){
                    classe = motsSaisis[index] === mot ? "correct" : "incorrect";
                }
                else if(index === motCourantIndex){
                    classe = "current"; // mot courant
                }

                return(
                    <span key={index} className = {classe}>
                        {mot}{" "}
                    </span>
                );
            })}
        </p>
    );
}

export default TexteA_Taper;