import { useContext } from "react";
import { GameContext, ACTIONS } from "../context/GameContext";

function Recapitulatif() {
  const { state, dispatch } = useContext(GameContext);

  const mots = state.texteATaper.split(" ");

  const nbMotsCorrects = state.motsSaisis.filter(
    (mot, index) => mot === mots[index]
  ).length;

  const nbMotsIncorrects = state.motsSaisis.length - nbMotsCorrects;

  const nbCaracteres = state.motsSaisis.join(" ").length;

  const wpm = Math.round((state.motsSaisis.length / 30) * 60);

  const precision =
    state.motsSaisis.length > 0
      ? Math.round((nbMotsCorrects / state.motsSaisis.length) * 100)
      : 0;

  return (
    <div className="recap">
      <h2>Récapitulatif</h2>
      <p>Nombre de caractères entrés : {nbCaracteres}</p>
      <p>Nombre de mots corrects : {nbMotsCorrects}</p>
      <p>Nombre de mots incorrects : {nbMotsIncorrects}</p>
      <p>Erreurs totales : {state.nbErreurs}</p>
      <p>Vitesse : {wpm} mots / minute</p>
      <p>Précision : {precision}%</p>

      <button onClick={() => dispatch({ type: ACTIONS.REJOUER })}>
        Rejouer
      </button>
    </div>
  );
}

export default Recapitulatif;