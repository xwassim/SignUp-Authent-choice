import React from "react";
import Navbar from "./Navbar";
import Parent from "./Assets/Parent.svg";
import Proprio from "./Assets/Proprio.svg";
import { Link } from "react-router-dom";
import Bg from "./Assets/BlueShapeInclined.svg";

const Choice = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="Choice w-full py-[4rem] text-rose-900  bg-[#ffb4b4]">
        <h1 className="text-3xl  text-center">Vous etes ?</h1>
        <div className="Choose  mx-[14rem]">
          <div className="Proprio hover:scale-95 duration-300 ">
            <Link to="/MenuProprio">
              <img src={Proprio} alt="/"></img>

              <h2 className=" text-3xl text-rose-900 text-center font-semibold">
                Un Proprietaire
              </h2>
            </Link>
          </div>
          <div class="container">
            <h1 className="text-3xl text-rose-900">Ou bien</h1>
          </div>

          <div className="Parent  hover:scale-95 duration-300 ">
            <Link to="/MenuParent">
              {" "}
              <img src={Parent} alt="/"></img>
              <h2 className="text-3xl text-center font-semibold text-rose-900  ">
                Un Parent
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choice;
