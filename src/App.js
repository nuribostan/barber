import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services/Services"
import AllHall from "./pages/AllHall/AllHall"
import Contact from "./pages/Contact/Contact";
import MainStore from "./pages/Store/MainStore";
import Franchise from "./pages/Franchise/Franchise";
import About from "./pages/About/About";


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hakkımızda" element={<About />} />
          <Route exact path="/hizmetlerimiz" element={<Services />} />
          <Route exact path="/salonlarımız" element={<AllHall />} />
          <Route exact path="/iletişim" element={<Contact />} />
          <Route exact path="/mağaza" element={<MainStore />} />
          <Route exact path="/franchise" element={<Franchise />} />
        </Routes>
    </div>
  );
}

export default App;
