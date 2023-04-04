import React from "react";

import profil from "../Assets/profil.svg";
import enfant from "../Assets/enfants (1).svg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Menu2 = () => {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <div>
      <h1>Menu d'etulisation</h1>
      <div className="Menu">
         <Link> <img src ={enfant} alt="/"></img></Link>
         <Link><img src ={profil} alt="/"></img></Link>
      </div>
    </div>
  </>
  )
}

export default Menu2