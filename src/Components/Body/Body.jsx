import './bodyStyle.css'
import Bitmoji from '../../assets/bitmoji.png'
import Github from '../../assets/github.png'
import Linked from '../../assets/linkedin.png'
import Mail from '../../assets/mail.png'
import Medium from '../../assets/medium.png'
import Myphoto from '../../assets/myphoto.jpg'

function Body() {
    return (
        <div className="body-container">
            {/* Section container */}
            <div className='section-container'>
                {/* Section1 starts here */}
                <div className='section1'>
                    <div className='section1-left'>
                        <div className='bitmoji-box'>
                            <img src={Bitmoji} alt='my-bitmoji' id='bitmoji'/>
                        </div>
                    </div>
                    <div className='section1-right'>
                        <div className='sec-1-right-text-wrapper'>
                            <h1>
                                Hello, &nbsp;
                                <u>Dannie here</u>
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
                {/* Section2 starts here */}
                <div className='section2'>
                    <div className='section2-left'>
                        <div className='sec2-left-text'>
                            <h1><u>About</u></h1>
                            <h2>How it all started</h2>
                            <p>Hi there, My name is Okorie Onyedikachi Cosmas, 
                                a budding frontend engineer. Prior to the completion of 
                                my bachelors degree, i found my passion for website design and 
                                development when i walked in on a classmate working on a website for his 
                                client he got on Fiverr, i asked him how he was able to curate these beautiful designs and put 
                                them on the internet, He laughed and showed me how wordpress.org worked. 
                                I had heard about website designs before then, but seeing it being done first hand was the birth of this passion
                            </p>
                            <div className='horizontal-line'>
                                <hr className='hr1'></hr>
                                <hr className='hr2'></hr>
                            </div>
                            <h2>How it is going</h2>
                            <p>
                                2+ years after delivering websites designed on Wordpress as a freelancer, 
                                i needed more. i had learnt CSS casually during my website design journey, but 
                                i knew i could do better. I wanted to build these websites from scratch without a CMS controlling
                                what i had access to, so i went back to the basics
                                to pick a better and advanced website development path. Choosing frontend 
                                development came easy to me because of my love for CSS and
                            </p>
                        </div>
                        
                    </div>
                    <div className='section2-right'>
                        <div className='img-wrapper'>
                            <img src={Myphoto} alt='my-photo' id='my_photo'/>
                        </div>
                    </div>
                </div>
                {/* Section3 Starts here */}
                <div className='section3'>nvbejunsiks</div>
            </div>
            
        </div>
    )
}

export default Body;