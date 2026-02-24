import { useEffect , useContext} from "react";
import { GameContext , ACTIONS } from "../context/GameContext";

function Timer(){
   const {state , dispatch} = useContext(GameContext);

    useEffect(()=>{
    
        if(!state.partieActive) return ;

        const interval = setInterval(()=>{
             dispatch({type: ACTIONS.TICK});
        } , 1000);

        //clearnup a chaque rendu ou fin de partie
        return () => clearInterval(interval);
    } , [state.partieActive , dispatch]);

     return <p style={{color: "black"}} >Temps restant : {state.tempsRestant} secondes</p>
}

export default Timer;