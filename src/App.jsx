import "./App.css"
import { GameContext, GameProvider } from "./context/GameContext";
import { useContext } from "react";
import TexteA_Taper from "./composants/TexteA_Taper";
import ZoneSaisie from "./composants/ZoneSaisie";
import Timer from "./composants/Timer";
import Recapitulatif from "./composants/Recapitulatif";

function AppContent() {
    const { state } = useContext(GameContext);
    return (
        <>
            <h1>Test Dactylographie</h1>
            {state.partieActive || state.tempsRestant > 0 ? (
                <>
                   <Timer></Timer>
                   <TexteA_Taper></TexteA_Taper>
                   <ZoneSaisie></ZoneSaisie>
                </>
            ) : (
                <Recapitulatif></Recapitulatif>
            )}
        </>
    );
}

function App(){
    return(
        <GameProvider>
            <AppContent></AppContent>
        </GameProvider>
    );
}

export default App;