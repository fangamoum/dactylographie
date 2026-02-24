import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function TexteA_Taper() {
  const { state } = useContext(GameContext);

  const mots = state.texteATaper.split(" ");

  return (
    <p>
      {mots.map((mot, index) => {
        let classe = "";

        if (index < state.motsSaisis.length) {
          classe = state.motsSaisis[index] === mot ? "correct" : "incorrect";
        } else if (index === state.motCourantIndex) {
          classe = "current"; // mot courant
        }

        return (
          <span key={index} className={classe}>
            {mot}{" "}
          </span>
        );
      })}
    </p>
  );
}

export default TexteA_Taper;