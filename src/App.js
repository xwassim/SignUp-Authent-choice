import React from 'react';
import SignUp from './Components/SignUp';
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import Authentification from './Components/Authentification';
import Login from './Components/Login';
import Choice from './Components/Choice';
import Menu from './Components/MenuProprio/Menu';
import Menu2 from './Components/MenuParent/Menu2';
function App() {
  return (
    <>
   

    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Authentification" element={<Authentification />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Choice" element={<Choice />} />
      <Route path="/MenuProprio" element={<Menu />} />
      <Route path="/MenuParent" element={<Menu2 />} />
    </Routes>

   </>
  );
}

export default App;
