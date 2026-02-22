function ZoneSaisie({ valeurSaisie, setValeurSaisie, motsSaisis, setMotsSaisis }) {
    const gestionTouche = (e) => {
        if (e.key === " ") {
            e.preventDefault();
            setMotsSaisis([...motsSaisis, valeurSaisie.trim()]); // trim pour enlever les espaces
            setValeurSaisie("");
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
        />
    );
}

export default ZoneSaisie;