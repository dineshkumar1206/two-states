import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
