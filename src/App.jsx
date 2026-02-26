import "./App.css";
import { GameContext, GameProvider } from "./context/GameContext";
import { useContext } from "react";
import TexteATaper from "./composants/TexteATaper";
import ZoneSaisie from "./composants/ZoneSaisie";
import Timer from "./composants/Timer";
import Recapitulatif from "./composants/Recapitulatif";

function AppContent() {
  const { state } = useContext(GameContext);

  return (
    <div className="app-container"> 
      <h1>Test de Dactylographie</h1>

      {state.tempsRestant > 0 ? (
        <>
          <Timer />
          <TexteATaper />
          <ZoneSaisie />
        </>
      ) : (
        <Recapitulatif />
      )}
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;