
function TexteA_Taper({texte, motsSaisis}){
    // on decoupe le texte en mots

    const mots = texte.split(" ");

    return(
        <p>
            {mots.map((mot , index)=> {
                let couleur = "" ; 

                if(index < motsSaisis.length){
                    couleur = motsSaisis[index] === mot ? "green" : "red";
                }

                return(
                    <span key={index} style = {{color:couleur}}>
                        {mot}{" "}
                    </span>
                );
            })}
        </p>
    );
}

export default TexteA_Taper;