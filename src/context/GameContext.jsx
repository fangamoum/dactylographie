import { createContext, useReducer } from "react";

// État initial
const initialState = {
  texteATaper:
    "React est une bibliothèque JavaScript pour créer des interfaces utilisateur.",
  valeurSaisie: "",
  motsSaisis: [],
  motCourantIndex: 0,
  tempsRestant: 30,
  partieActive: false,
  nbErreurs: 0,
};

// Actions
export const ACTIONS = {
  START_PARTIE: "start_partie",
  UPDATE_VALEUR: "update_valeur",
  SAISIR_MOT: "saisir_mot",
  TICK: "tick",
  REJOUER: "rejouer",
};

// Reducer
function gameReducer(state, action) {
  switch (action.type) {
    case ACTIONS.START_PARTIE:
      return { ...state, partieActive: true };

    case ACTIONS.UPDATE_VALEUR:
      return { ...state, valeurSaisie: action.payload };

    case ACTIONS.SAISIR_MOT: {
      const mots = state.texteATaper.split(" ");
      const motAttendu = mots[state.motCourantIndex];

      let erreurs = state.nbErreurs;
      if (state.valeurSaisie !== motAttendu) {
        erreurs += 1;
      }

      const nouveauIndex = state.motCourantIndex + 1;
      const texteTermine = nouveauIndex >= mots.length;

      return {
        ...state,
        motsSaisis: [...state.motsSaisis, state.valeurSaisie],
        valeurSaisie: "",
        motCourantIndex: nouveauIndex,
        nbErreurs: erreurs,
        partieActive: texteTermine ? false : state.partieActive,
      };
    }

    case ACTIONS.TICK:
      if (state.tempsRestant <= 1) {
        return { ...state, tempsRestant: 0, partieActive: false };
      }
      return { ...state, tempsRestant: state.tempsRestant - 1 };

    case ACTIONS.REJOUER:
      return { ...initialState };

    default:
      return state;
  }
}

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}