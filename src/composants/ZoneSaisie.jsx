function ZoneSaisie({ valeurSaisie, setValeurSaisie, motsSaisis, setMotsSaisis , motCourantIndex , setMotCourantIndex , partieActive , setPartieActive }) {
    const gestionTouche = (e) => {
        if (e.key === " ") {
            e.preventDefault();
            setMotsSaisis([...motsSaisis, valeurSaisie]); 
            setValeurSaisie("");
            setMotCourantIndex(motCourantIndex + 1); // mot suivant
        }
        else if(!partieActive && e.target.value.length > 0){
              setPartieActive(true); // demarre la partie au premier caractere
        }
    };

    return (
        <input
            type="text"
            value={valeurSaisie}
            onChange={(e) => setValeurSaisie(e.target.value)}
            onKeyDown={gestionTouche}
            placeholder="Taper ici..."
            autoFocus
            disabled={!partieActive && motsSaisis.length > 0} // bloqué si la partie est terminée
            style={{ width: "100%", fontSize: "18px", padding: "10px", marginTop: "10px" }}
        />
    );
}

export default ZoneSaisie;