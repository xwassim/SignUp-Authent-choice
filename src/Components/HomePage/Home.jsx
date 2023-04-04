import React from 'react';

import CCM from "./CCM";
import Phonepub from "./Phonepub";
import Navbar from '../Navbar';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <na>
      <Navbar />
    </na>
    <Phonepub />
    <CCM />
    </>
  )
}

export default Home