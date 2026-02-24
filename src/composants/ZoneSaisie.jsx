import { useContext } from "react";
import { GameContext, ACTIONS } from "../context/GameContext";

function ZoneSaisie() {
  const { state, dispatch } = useContext(GameContext);

  const gestionTouche = (e) => {
    if (!state.partieActive && e.key.length === 1) {
      dispatch({ type: ACTIONS.START_PARTIE });
    }

    if (e.key === " ") {
      e.preventDefault();
      dispatch({ type: ACTIONS.SAISIR_MOT });
    }
  };

  return (
    <input
      type="text"
      value={state.valeurSaisie}
      onChange={(e) =>
        dispatch({ type: ACTIONS.UPDATE_VALEUR, payload: e.target.value })
      }
      onKeyDown={gestionTouche}
      placeholder="Taper ici..."
      autoFocus
      style={{ width: "100%", fontSize: "18px", padding: "10px", marginTop: "10px" }}
    />
  );
}

export default ZoneSaisie;