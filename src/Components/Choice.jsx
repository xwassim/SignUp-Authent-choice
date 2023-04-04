import React from "react";
import Navbar from "./Navbar";
import Parent from "./Assets/Parent.svg";
import Proprio from "./Assets/Proprio.svg";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="Choix">
        <h1 className="mt-5 mb-5 text-3xl text-blue-950 text-center">Vous etes ?</h1>
        <div className="Choose mt-9 ">
          <div className="Proprio">
            <Link to="/MenuProprio">
              <img src={Proprio} alt="/"></img>

              <h2 className="text-3xl text-center font-semibold hover:text-rose-950">Un Proprietaire</h2>
            </Link>
          </div>
          <h1 className="text-blue-950 mt-10 mx-14 text-3xl ">Ou bien</h1>
          <div className="Parent">
            <Link to="/MenuParent">
              {" "}
              <img src={Parent} alt="/"></img>
              <h2 className="text-3xl text-center font-semibold  hover:text-rose-950">Un Parent</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choice;
