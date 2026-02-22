import "./App.css"
import { useState } from "react";
import TexteA_Taper from "./composants/TexteA_Taper";
import ZoneSaisie from "./composants/ZoneSaisie";
import Timer from "./composants/Timer";
import Recapitulatif from "./composants/Recapitulatif";

function App() {
    const texte = "React est une bibliotheque JavaScript pour créer des interface graphique";

    const [valeurSaisie, setValeurSaisie] = useState("");
    const [motsSaisis, setMotsSaisis] = useState([]);
    const [motCourantIndex , setMotCourantIndex] = useState(0);
    const [tempsRestant , setTempsRestant] = useState(30);
    const [partieActive , setPartieActive] = useState(false);

    const rejouer = ()=> {
        setValeurSaisie("");
        setMotsSaisis([]);
        setTempsRestant(30);
        setPartieActive(false);
    };
    

    return (
        <>
            <h1>Test Dactylographie</h1>

          {tempsRestant > 0 ?(
             <>
                 <Timer
                    tempsRestant={tempsRestant}
                    setTempsRestant={setTempsRestant}
                    partieActive={partieActive}
                    setPartieActive={setPartieActive}
                />
               
                <TexteA_Taper 
                    texte={texte} 
                    motsSaisis={motsSaisis} 
                    motCourantIndex={motCourantIndex}
                />


                <ZoneSaisie
                   valeurSaisie={valeurSaisie}
                   setValeurSaisie={setValeurSaisie}
                   motsSaisis={motsSaisis}
                   setMotsSaisis={setMotsSaisis}
                   partieActive={partieActive}
                   setPartieActive={setPartieActive}
                   setMotCourantIndex={setMotCourantIndex}
                   motCourantIndex={motCourantIndex}
                />
             
            </>
          ) : (
              <Recapitulatif
                 motsSaisis={motsSaisis}  
                 texte={texte} 
                 rejouer={rejouer}
             />
          )}
        
        </>
    );
}

export default App;