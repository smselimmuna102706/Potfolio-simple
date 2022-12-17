import './App.css';
import Website from './Components/Home/Website';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Portfolio from './Components/Pages/Portfolio';
import Home from './Components/Pages/Home';
import Footer from './Components/Pages/Footer';
import FooterBottom from './Components/Pages/FooterBottom';
import About2 from './Components/Pages/About2';
import HowWork from './Components/Pages/HowWork';


function App() {
  return (
    <div className='Container'>
      <Website />
      <About />
      <About2 />
      <HowWork />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <FooterBottom />

    </div>
  );
}

export default App;
