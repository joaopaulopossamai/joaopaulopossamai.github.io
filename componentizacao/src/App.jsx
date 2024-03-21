import React, { useState } from 'react';
import Header from './components/Header';
import Contador from './components/Contador';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const alterarDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Header />
      <Contador />
      alterar cor fundo
      <button onClick={alterarDarkMode}>Alterar</button>
      <Footer />
    </>
  );
}

export default App;
