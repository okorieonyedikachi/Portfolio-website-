import './headerStyle.css'

function Header() {
    return (
        <div className="header-container">
            <header>
                <div className='header-left'>
                    <h2>Dannie</h2>
                </div>
                <div className='header-right'>
                    <nav className='nav-menu'>
                        <ul className='nav-list'>
                            <li className='list'>About</li>
                            <li className='list'>Skills</li>
                            <li className='list'>Project</li>
                            <li className='list'>Resume</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;