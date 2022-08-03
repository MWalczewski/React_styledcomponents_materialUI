import "./App.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer";

function App() {
  const [logo, setLogo] = useState("LOGO");
  const [clickedButton, setClickedButton] = useState("");
  return (
    <div className="site">
      <NavigationBar
        logo={logo}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <Page
        clickedButton={clickedButton}
        logo={logo}
        setLogo={setLogo}
        className="page"
      />
      <Footer />
    </div>
  );
}

export default App;
