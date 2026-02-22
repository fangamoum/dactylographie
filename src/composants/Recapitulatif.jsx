function Recapitulatif({motsSaisis , texte , rejouer}){
    const mots = texte.split(" ");

    const nbMotsCorrects = motsSaisis.filter((mot , index)=> mots[index] === mot).length;
    const nbMotsIncorrects = motsSaisis.length - nbMotsCorrects;
    const nbCaracteres = motsSaisis.join(" ").length;

    return (
        <div style={{marginTop: "20px"}}>
            <h2>Recapitulatif</h2>
            <p>Nombre de caractères tapés : {nbCaracteres}</p>
            <p>Nombre de mots corrects : {nbMotsCorrects}</p>
            <p>Nombre de mots incorrects : {nbMotsIncorrects}</p>

            <button onClick={rejouer} style={{padding: "10px 20px", marginTop: "10px"}}>
                Rejouer
            </button>

        </div>
    )
}

export default Recapitulatif;