import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "./components/ui/Typography";
import { GlobalStyles } from "./styles/Global";
import {
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
} from "./components/ui/Icons.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
      <br />
      <Play color="red" />
      <SkipLeft color="blue" />
      <SkipRight color="green" />
      <Pause />
      <Volume />
      <Music />
      <ArrowLeft />
      <ArrowRight />
      <Heart />
      <Search />
    </ThemeProvider>
  );
}

export default App;
