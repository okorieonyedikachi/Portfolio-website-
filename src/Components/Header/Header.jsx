import { useState } from 'react';
import './headerStyle.css'
import Hamburger from 'hamburger-react' 

function Header() {

    const  {isOpen, setIsOpen} = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="header-container">
            <header>
                <div className='header-left'>
                    <h2>Dannie</h2>
                </div>
                <div className='header-right'>
                    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                        <ul className='nav-list'>
                            <li className='list'>About</li>
                            <li className='list'>Skills</li>
                            <li className='list'>Project</li>
                            <li className='list'>Resume</li>
                        </ul>
                        <div className='hamburger'>
                            <Hamburger
                                toggled={isOpen} onToggle={toggleMenu}
                            />
                        </div>
                        
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;