import Hamburger from 'hamburger-react'
import './headerStyle.css'
import Navlist from './Navlist'



const MobileNav = () => {
  return (
    <div className='MobileNav'>
        <Navlist />
        <Hamburger />
    </div>
    
  )
}

export default MobileNav