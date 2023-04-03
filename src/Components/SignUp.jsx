import React from 'react';
import Form from './Form';
import Navbar from './Navbar'
function SignUp() {
  return (
    <>
    <nav>
    <Navbar/>
    </nav>
    <div className='titre'><h1 className='text-4xl'>Inscrivez vous !</h1></div>
    <div className='formulaire'>
    <Form/>
   </div>
   </>
  );
}

export default SignUp;