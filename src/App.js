import "./App.css";
// import CustomNavbar from './Components/Header/CustomNavbar';
import Navbar from "./Components/Header/Navbar";
import Skills from './Components/Pages/Skills/Skills';
import Exploration from "./Components/Pages/Work/Exploration";
import Review from "./Components/Pages/Work/Review";
import Work from "./Components/Pages/Work/Work";
import Story from "./Components/Pages/about/Story";
import Connect from "./Components/Pages/contact/Connect";
import Landing from "./Components/Pages/home/Landing";
// import Test from "./Components/Pages/Skills/Test"
// import Loading from "./Components/Pages/home/Loading";

function App() {
  return (
    <div className="App">
      {/* <Loading /> */}
      <Navbar />
      <Landing />
      <Story />
      <Skills />
      <Work />
      <Review />
      <Exploration />
      <Connect />
      {/* <Test/> */}
    </div>
  );
}

export default App;
