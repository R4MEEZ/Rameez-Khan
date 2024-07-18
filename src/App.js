import { Helmet } from "react-helmet";
import "./App.css";
// import siteImg from "https://r4meez.github.io/Rameez-Khan/site-screenshot.png"
// import CustomNavbar from './Components/Header/CustomNavbar';
import Navbar from "./Components/Header/Navbar";
import Resume from "./Components/Header/Resume";
import Skills from "./Components/Pages/Skills/Skills";
import Exploration from "./Components/Pages/Work/Exploration";
import Review from "./Components/Pages/Work/Review";
import Work from "./Components/Pages/Work/Work";
import Story from "./Components/Pages/about/Story";
import Connect from "./Components/Pages/contact/Connect";
import Landing from "./Components/Pages/home/Landing";
import ReactGA from "react-ga4";
import structuredData from "./Components/Stuctured-Data";
// import Loading from "./Components/Pages/home/Loading";

function App() {
  ReactGA.initialize("G-80HX2ND678");
  return (
    <div className="App">
      <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta property="og:title" content="Rameez Khan" />
        <meta property="og:url" content="https://r4meez.github.io/Rameez-Khan/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content="Hi, I am a Front-End Developer, This is my portfolio" />
      </Helmet>
      {/* <Loading /> */}
      <Navbar />
      <Resume />
      <Landing />
      <Story />
      <Skills />
      <Work />
      <Review />
      <Exploration />
      <Connect />
    </div>
  );
}

export default App;
