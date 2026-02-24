import { createContext, useReducer } from "react";

// état initial
const initialState = {
  texteATaper: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur.",
  valeurSaisie: "",
  motsSaisis: [],
  motCourantIndex: 0,
  tempsRestant: 30,
  partieActive: false,
};

// actions possibles
export const ACTIONS = {
  START_PARTIE: "start_partie",
  UPDATE_VALEUR: "update_valeur",
  SAISIR_MOT: "saisir_mot",
  TICK: "tick",
  REJOUER: "rejouer",
};

// reducer
function gameReducer(state, action) {
  switch (action.type) {
    case ACTIONS.START_PARTIE:
      return { ...state, partieActive: true };
      
    case ACTIONS.UPDATE_VALEUR:
      return { ...state, valeurSaisie: action.payload };

    case ACTIONS.SAISIR_MOT:
      return {
        ...state,
        motsSaisis: [...state.motsSaisis, state.valeurSaisie],
        valeurSaisie: "",
        motCourantIndex: state.motCourantIndex + 1,
      };

    case ACTIONS.TICK:
      if (state.tempsRestant <= 0) {
          return { ...state, partieActive: false , tempsRestant : 0 };
      } 
      return { ...state, tempsRestant: state.tempsRestant - 1 };

    case ACTIONS.REJOUER:
      return { ...initialState };
    default:
      return state;
  }
}

// création du context
export const GameContext = createContext();

// provider
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}