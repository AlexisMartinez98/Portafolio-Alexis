import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import MySkill from "./components/MySkill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="font-font-1">
        <Router>
          <NavBar />
          <Header />
          <AboutMe />
          <MySkill />
          <Projects />
          <Contact />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
