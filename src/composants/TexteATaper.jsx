import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function TexteATaper() {
  const { state } = useContext(GameContext);
  const mots = state.texteATaper.split(" ");

  return (
    <div className="text-zone">
      {mots.map((mot, index) => {
        const motDejaTape = index < state.motsSaisis.length;
        const motCourant = index === state.motCourantIndex;

        // Mot déjà validé
        if (motDejaTape) {
          const estCorrect = state.motsSaisis[index] === mot;
          return (
            <span key={index} className={estCorrect ? "correct" : "incorrect"}>
              {mot}{" "}
            </span>
          );
        }

        // Mot en cours de frappe
        if (motCourant) {
          return (
            <span key={index} className="current">
              {mot.split("").map((lettre, i) => {
                let classe = "";
            
                if (i < state.valeurSaisie.length) {
                  classe =
                    state.valeurSaisie[i] === lettre
                      ? "correct"
                      : "incorrect";
                }

                return (
                  <span key={i} className={classe}>
                    {lettre}
                  </span>
                );
              })}
              {" "}
            </span>
          );
        }

        // Mot pas encore tapé
        return <span key={index}>{mot} </span>;
      })}
    </div>
  );
}

export default TexteATaper;