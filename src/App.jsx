import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { Bounce, ToastContainer } from "react-toastify";
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

//  Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
import Player from "./components/Player";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <Home />
        <Player />
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
  );
}

export default App;
