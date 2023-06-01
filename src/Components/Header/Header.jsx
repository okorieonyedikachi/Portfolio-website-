// import { useState } from 'react';
import './headerStyle.css'
import MobileNav from './MobileView/MobileNav';
import Navigation from './Navigation';

function Header() {

    return (
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
         
        
        
    )
}
export default Header;