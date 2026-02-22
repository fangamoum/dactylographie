import { useState } from "react";
import TexteA_Taper from "./composants/TexteA_Taper";

function App(){
  const texte = "React est une bibliotheque JavaScript pour créer des interface graphique";
  const [motsSaisis , setMotSaisis] = useState(["React" , "a"]);
  return[
    <>
       <h1>Test Dactylographie</h1>
       <TexteA_Taper texte={texte} motsSaisis={motsSaisis}></TexteA_Taper>
    </>
  ]
}

export default App;