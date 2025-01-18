import { useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { Bounce, ToastContainer } from "react-toastify";
import { initialState, playerReducer } from "./context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "./context/playerContext";
import { theme } from "@/styles/Theme";
import { GlobalStyles } from "@/styles/Global";
import { setStorageValue } from "./services/localStorage";
import AppRouter from "./AppRouter";

//  Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

//  Import rc-slider css
import "rc-slider/assets/index.css";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    setStorageValue("savedTrackIds", state.savedTrackIds);
  }, [state.savedTrackIds]);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
