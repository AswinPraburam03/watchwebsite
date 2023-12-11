import './footer.scss'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
         <div className="footerwrapper">
            <div className="footerLinks">
                <div className="Locations">
                    <h2>Our Store Locations</h2>
                    <a href="/"><p>Chennai</p></a>
                    <a href="/"><p>Salem</p></a>
                    <a href="/"><p>Coimbatore</p></a>
                    <a href="/"><p>Kerala</p></a>
                    <a href="/"><p>Bengaluru</p></a>
                </div>

                <div className="Locations">
                    <h2>About Rolex</h2>
                    <a href="/"><p></p></a>
                    <a href="/"><p>Behind the crown</p></a>
                    <a href="/"><p>History</p></a>
                    <a href="/"><p>Contact Us</p></a>
                    <a href="/"><p>Customer Reviews</p></a>
                    <a href="/"><p>Franchisee</p></a>
                </div>


                <div className="Locations">
                    <h2>Popular Search</h2>
                    <a href="/"><p>Collections</p></a>
                    <a href="/"><p>Men's Watches</p></a>
                    <a href="/"><p>Women's Watches</p></a>
                    <a href="/"><p>New Arrivals</p></a>
                    <a href="/"><p>Sales & Clearance</p></a>
                </div>


                <div className="Locations">
                    <h2>Services</h2>
                    <a href="/"><p>Buying a Rolex</p></a>
                    <a href="/"><p>Your favourites</p></a>
                    <a href="/"><p>Watch care and service</p></a>
                    <a href="/"><p>Frequently asked questions</p></a>
                </div>

                <div className="Locations">
                <div className="footer-content">
                        <input type="e-mail" placeholder='Enter your email'  className="email-input"/>
                        <button>Subscribe</button>
                    </div>
                </div>


                <div className="Locations">
                    <div className="social">
                        <InstagramIcon className='Icon'/>
                        <FacebookIcon className='Icon'/>
                        <YouTubeIcon className='Icon'/>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="footerBelow">
        <div className="copyright">
            <p>&copy; All rights reserved by Interiour @{new Date().getFullYear()}</p>
        </div>

        <div className="terms">
            <a href="/"><p>Terms & Conditions</p></a>
            <a href="/"><p>Privacy Policy</p></a>
            <a href="/"><p>Site Map</p></a>
        </div>
        </div>

    </div>

  );
};

export default Footer