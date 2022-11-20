import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './utilities.css';
import Navbar1 from './components/Navbar/Navbar1';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Partners from './components/Partneri/Partners';
import Category from './components/Category/Category';
import Kontakt from './components/Kontakt/Kontakt';
import Home from './pages/Home/Home';
import Projekts from './components/Projekt/Projekts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Verkaufen from './components/Verkafuen/Verkaufen';
AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/verkaufen" element={<Verkaufen />} />
          <Route path="/verkaufen/:name" element={<Projekts />} />

          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
