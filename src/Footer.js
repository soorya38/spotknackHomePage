import logo from './images/logo.png';

function Footer() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <Logo />
                        <h4 className='footer-description'>
                            Collect your components under variant sections for developers to access them during development.
                        </h4>
                    </div>
                    
                    <div className='footer-links'>
                        <div className='footer-column'>
                            <h3 className='footer-title'>Useful links</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                        
                        <div className='footer-column'>
                            <h3 className='footer-title'>Contact Us</h3>
                            <ul>
                                <li><a href="mailto:dandelions@spotknack.com">dandelions@spotknack.com</a></li>
                                <li><a href="tel:+919874561230">+91-9874561230</a></li>
                                <li><a href="#">Website</a></li>
                            </ul>
                        </div>
                        
                        <div className='footer-column'>
                            <h3 className='footer-title'>Content</h3>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Sponsor Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default Footer;
