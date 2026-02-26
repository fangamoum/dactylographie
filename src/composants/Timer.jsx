import { useEffect, useContext } from "react";
import { GameContext, ACTIONS } from "../context/GameContext";

function Timer() {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    if (!state.partieActive) return;

    const interval = setInterval(() => {
      dispatch({ type: ACTIONS.TICK });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.partieActive, dispatch]);

  return (
      <div className="timer">
           {state.tempsRestant} secondes
      </div>
  )
}

export default Timer;