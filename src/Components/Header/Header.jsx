// import { useState } from 'react';
import './headerStyle.css'
import MobileNav from './MobileView/MobileNav';
import Navigation from './Navigation';

function Header() {

    // const  {isOpen, setIsOpen} = useState(false);
    
    // const toggleMenu = () => {
    //     setIsOpen(!isOpen)
    // }

    return (
        <div className='header-wrapper'>
            <div className="header-container">
                <header>
                    <div className='header-left'>
                        <h2>Dannie</h2>
                    </div>
                    
                    <nav className='header-right'> 
                        <Navigation />
                        <MobileNav /> 
                    </nav>
                    
                </header>
            </div>
            <div className=' active'><p>jnvekv</p></div>
        </div>
        
    )
}
export default Header;