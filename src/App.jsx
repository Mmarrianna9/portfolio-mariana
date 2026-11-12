

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact';
import GraphicPortfolio from './pages/GraphicPortfolio';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/graphic-design"
            element={<GraphicPortfolio />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
