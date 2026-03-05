import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Pages from './Pages'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(prev => !prev)
  }
  return (
    <>
      <Router>
        <div className={lightMode ? "light" : ""}>
          <Navbar
            toggleLightMode={toggleLightMode}
            lightMode={lightMode} />
          <Pages />
          <Footer lightMode={lightMode} />
        </div>
      </Router>
    </>
  )
}

export default App;
