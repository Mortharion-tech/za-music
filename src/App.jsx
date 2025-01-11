import { ThemeProvider } from "styled-components";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
