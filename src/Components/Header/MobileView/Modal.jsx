import './Modal.css'

import Navlist from '../Navlist'
import { useState } from 'react';


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  return (
    <div className='modal'
    style={{ width: isOpen ? "250px" : "0" }}
    >
      <Navlist />
    </div>
  )
}

export default Modal