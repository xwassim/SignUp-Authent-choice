import React from "react";
import creches from "../Assets/creches.svg";
import profil from "../Assets/profil.svg";
import enfant from "../Assets/enfants (1).svg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <h2 className="mt-5  text-blue-950 font-semibold text-4xl text-center ">Menu d'utilisation</h2>
        <div className="Menu mt-10">
        <Link>   <img src ={creches} alt="/"></img></Link>
        <Link>   <img src ={enfant} alt="/"></img></Link>
        <Link> <img src ={profil} alt="/"></img></Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
