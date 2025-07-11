import "./App.css";
import Nav from "./Compounent/Nav/Nav";
import Footer from "./Compounent/Footer/Footer";

import CardGrid from "./Compounent/CardGrid/CardGrid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Compounent/Home/Home";
import ColloctionDetail from "./Compounent/ColloctionDetail/ColloctionDetail";
import About from "./Compounent/About/About";

function App() {
  return (
    <div className="App ">
    <div className=" ">
    
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/COLLECTION" element={<CardGrid />} />
          <Route path="/ColloctionDetail" element={<ColloctionDetail />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
