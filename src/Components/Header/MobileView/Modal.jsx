import './Modal.css'
import PropTypes from "prop-types";

import Navlist from '../Navlist'



const Modal = ({className,setIsMenuOpen}) => {
  

  


  return (
    <div className='modal-list'
      onClick={()=> setIsMenuOpen(false)}
    >
      <div className='modal-div'>
         <div className={`modal ${className}`}>
      
        <Navlist />
      </div>
      
      </div>
     
    </div>
  )
}
Modal.propTypes = {
 
  className: PropTypes.string,
  setIsMenuOpen: PropTypes.bool
};
export default Modal