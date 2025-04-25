import Hero from './components/Hero';
import './App.css'; 
import Navbar from './components/Navbar';
import HeroAbout from './components/HeroAbout';


function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />
      <HeroAbout />
    </div>
  );
}

export default App;
