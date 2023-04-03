import React from 'react';
import SignUp from './Components/SignUp';
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import Authentification from './Components/Authentification';
function App() {
  return (
    <>
   

    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Authentification" element={<Authentification />} />
    </Routes>

   </>
  );
}

export default App;
