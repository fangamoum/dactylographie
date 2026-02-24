import { useContext } from "react";
import { GameContext , ACTIONS} from "../context/GameContext";


function Recapitulatif(){
    const {state , dispatch} = useContext(GameContext);
    
    const mots = state.texteATaper.split(" ");
    // Nombre de mots corrects
    const nbMotsCorrects = state.motsSaisis.filter(
        (mot , index)=> mots[index] === mot).length;
    
    // Nombre de mots incorrects
    const nbMotsIncorrects = state.motsSaisis.length - nbMotsCorrects;

    // Nombre de caractère tapés
    const nbCaracteres = state.motsSaisis.join(" ").length;

    // Mots par minute
    const wpm =  Math.round((state.motsSaisis.length / 30) *60 );

    //precision
    const precision = state.motsSaisis.length > 0
       ? Math.round((nbMotsCorrects / state.motsSaisis.length) * 100) : 0;

    return (
        <div style={{marginTop: "20px"}}>
            <h2>Recapitulatif</h2>
            <p>Nombre de caractères tapés : {nbCaracteres}</p>
            <p>Nombre de mots corrects : {nbMotsCorrects}</p>
            <p>Nombre de mots incorrects : {nbMotsIncorrects}</p>
            <p>Vitesse : {wpm} mots / minute</p>
            <p>Precision : {precision}%</p>

            <button onClick={()=>dispatch({type:ACTIONS.REJOUER})}>
                Rejouer 
            </button>
        </div>
    );
}

export default Recapitulatif;