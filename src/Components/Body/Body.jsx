import './bodyStyle.css'
import Bitmoji from '../../assets/bitmoji.png'
import Github from '../../assets/github.png'
import Linked from '../../assets/linkedin.png'
import Mail from '../../assets/mail.png'
import Medium from '../../assets/medium.png'

function Body() {
    return (
        <div className="body-container">
            <div className='section-container'>
                <div className='section1'>
                    <div className='section1-left'>
                        <div className='img-box'>
                            <img src={Bitmoji} alt='my-bitmoji' id='bitmoji'/>
                        </div>
                    </div>
                    <div className='section1-right'>
                        <div className='sec-1-right-text-wrapper'>
                            <h1>
                                Hello, &nbsp;
                                <u>I'm Dannie</u>
                            </h1>
                            <span>
                                a mobile-concerned frontend web developer <br/>with an undying passion for css
                            </span>
                        </div>
                        <div className='logo-wrapper'>
                           <div className='logo-box'>
                            <img src={Github} className='logo-img'/>
                           </div>
                           <div className='logo-box'>
                                <img src={Linked} className='logo-img'/>
                           </div>
                           <div className='logo-box'>
                                <img src={Mail} className='logo-img'/>
                           </div>
                           <div className='logo-box'>
                                <img src={Medium} className='logo-img'/>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='section2'>nvinvoerjoer</div>
            </div>
            
        </div>
    )
}

export default Body;