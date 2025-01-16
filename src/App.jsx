import { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { Bounce, ToastContainer } from "react-toastify";
import { initialState, playerReducer } from "./context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "./context/playerContext";
import { theme } from "@/styles/Theme";
/* import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "./components/ui/Typography"; */
import { GlobalStyles } from "@/styles/Global";
/* import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Volume,
} from "./components/ui/Icons.jsx"; */
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Player from "./components/Player";

//  Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

//  Import rc-slider css
import "rc-slider/assets/index.css";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./components/Layout";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
              </Route>
            </Routes>
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
