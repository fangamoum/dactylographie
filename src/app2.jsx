import { useState , useEffect } from 'react'
import './App.css'

function App() {
  // Texte de reference
     const [text] = useState (
          "React est une bibliothèque JavaScript pour créer des interfaces utilisateur"
     );

     // decoupage du texte en mots
    const mots = text.split(" ");

    // valeur saisie par l'utilisateur
    const [valeurSaisie , setValeurSaisie] = useState("");
    
    // mot actuel
    const [MotActuelIndex , setMotActuelIndex] = useState(0);

    // mots saisis
    const [MotsSaisis , setMotsSaisis] = useState([]);

    const [tempsRestant , setTempsRestant] = useState(30); // duree en seconce
    const [partieActive , setPartieActive] = useState(false) // la partie demarre au premier caractere

    useEffect(()=>{
      if(!partieActive) return ;

      const timer = setInterval(()=>{
        if(tempsRestant <= 0){
          clearInterval(timer);
          setPartieActive(false);
        }
        else{
          setTempsRestant((prev) => prev -1);
        }
      } , 1000);

      return () => clearInterval(timer);
    }, [partieActive , tempsRestant]);

    // calcul des statistiques

    const nbMotsCorrects = MotsSaisis.filter(
       (mot , index) => mots[index] === mot
    ).length

    const nbMotsIncorrects = MotsSaisis.length - nbMotsCorrects;
    const nbCaracteres = MotsSaisis.join(" ").length;

    const tempsTotal = 30;
    const wpm = Math.round((nbMotsCorrects / tempsTotal) * 60 );
    const precision = MotsSaisis.length > 0
     ? Math.round((nbMotsCorrects / MotsSaisis.length) * 100)
     : 0;

    const rejouer = ()=>{
      setValeurSaisie("");
      setMotActuelIndex(0);
      setMotsSaisis([]);
      setTempsRestant(30);
      setPartieActive(false);
    };

  return (
    <>
        <h1>Test de dactylographie</h1>

        {/* Texte a taper */}
        <p>
            {mots.map((mot , index)=> {
               let couleur = "";
               if(index < MotsSaisis.length){
                 couleur = MotsSaisis[index] === mot ? "green" : "red";
               }
               return (
                  <span key={index} style={{color:couleur}}>
                      {mot}{" "}
                  </span>
               )

            })}
        </p>

        <p>Temps restant : {tempsRestant} secondes</p>
        {/* zone de saisie */}
        <input 
           type="text" 
           value={valeurSaisie}
           disabled = {tempsRestant === 0}
           onChange={ (e) => {
              if(!partieActive) setPartieActive(true); // demarre la partie au premier caractere
              setValeurSaisie(e.target.value); 
           }}
           onKeyDown={(e)=> {
              if(e.key === " " && partieActive){
                e.preventDefault();      // empeche l'espace d'etre ecrit
                setMotsSaisis([...MotsSaisis , valeurSaisie]);
                setValeurSaisie("");     // vide le champ
                setMotActuelIndex(MotActuelIndex + 1); // mot suivant
              }
           }}
        />
        {!partieActive && MotsSaisis.length > 0 && (
           <div style={{marginTop: "20px"}}>
            <h2>Recap</h2>

            <p>Nombre de caractere tapes : {nbCaracteres}</p>
            <p>Nombre de mots corrects : {nbMotsCorrects}</p>
            <p>Nombre de mots incorrects : {nbMotsIncorrects}</p>

            <p>Vitesse : {wpm} mot / minute</p>
            <p>Precision : {precision}% </p>
            <button onClick={rejouer}>Rejouer</button>

           </div>
        )}
    </>
  );
}
export default App;
