import React from "react";
import "./Interface.scss";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function Interface() {
  return (
    <div className="Interface">
      <Nav />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default Interface;
