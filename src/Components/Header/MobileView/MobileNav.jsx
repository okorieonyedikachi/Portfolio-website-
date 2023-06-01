// import Hamburger from 'hamburger-react'
import "../headerStyle.css";
import { useState } from "react";

import Modal from "./Modal";
import Hamburger from "../../Icons/Hamburger";


const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div>
      <div className="MobileNav">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <p>X</p> : <Hamburger />}
        </button>
      </div>

      {isMenuOpen ? <Modal  
      setIsMenuOpen={setIsMenuOpen}
      className={'visible'}
      
      /> : ""}
    </div>
  );
};

export default MobileNav;
