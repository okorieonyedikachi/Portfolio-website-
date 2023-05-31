import Hamburger from 'hamburger-react'
import '../headerStyle.css'

// import Navlist from '../Navlist'

// import { useState } from 'react'
import Modal from './Modal'


const MobileNav = () => {
  // const handleToggle =  {
  //   openNav()
  // }

  return (
    <div>
        <div className='MobileNav'>
          {/* <Navlist /> */}
        
          <Hamburger 
            // onToggle={handleToggle}
          />
        </div>
        <Modal 
          
        />
    </div>
      
  )
}

export default MobileNav