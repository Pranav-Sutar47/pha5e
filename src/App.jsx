import TypingAnimation from './components/ui/typing-animation'
import { useState,useEffect } from 'react';
import Home from './pages/Home';

function App() {

  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const delay = 300 * 'P H A 5 E'.length*2; // Total duration based on typing speed and text length
    const timer = setTimeout(() => {
      setShowHello(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      { showHello ? (
          <Home/>
      ):
      (
        <TypingAnimation text='P H A 5 E' className="text-6xl font-bold text-white font-extrabold" duration={300}/>
      )
      }
      
      </div>
  )
}

export default App
