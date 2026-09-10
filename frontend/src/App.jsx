import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
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
    </>
  );
}

export default App;
