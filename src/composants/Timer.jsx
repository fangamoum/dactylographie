import { useEffect } from "react";

function Timer({tempsRestant , setTempsRestant , partieActive, setPartieActive}){
  
    useEffect(()=>{
        if(!partieActive) return ;

        const timer = setInterval(()=>{
            setTempsRestant((prev) =>{
                if(prev <= 1){
                    setPartieActive(false);
                    return 0;
                }
                return prev -1;
            });
            
        } , 1000);
        return () => clearInterval(timer);
    } , [partieActive , setTempsRestant , setPartieActive]);

     return <p style={{color: "black"}} >Temps restant : {tempsRestant} secondes</p>
}

export default Timer;