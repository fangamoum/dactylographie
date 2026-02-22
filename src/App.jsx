import "./App.css"
import { useState } from "react";
import TexteA_Taper from "./composants/TexteA_Taper";
import ZoneSaisie from "./composants/ZoneSaisie";

function App() {
    const texte = "React est une bibliotheque JavaScript pour créer des interface graphique";

    const [valeurSaisie, setValeurSaisie] = useState("");
    const [motsSaisis, setMotsSaisis] = useState([]);

    return (
        <>
            <h1>Test Dactylographie</h1>
            <TexteA_Taper texte={texte} motsSaisis={motsSaisis} />
            <ZoneSaisie
                valeurSaisie={valeurSaisie}
                setValeurSaisie={setValeurSaisie}
                motsSaisis={motsSaisis}
                setMotsSaisis={setMotsSaisis}
            />
        </>
    );
}

export default App;