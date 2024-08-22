import React from 'react';
import whatsapp from './images/whatsapp.png';
import phone1 from './images/phone1.png';
import phone2 from './images/phone2.png';
import './MainContent.css';

function MainContent() {
    return (
        <div className="main-content">
            <div className="text-content">
                <h1>Let’s Connect<br/> with Your Customers<br/> in Real Time</h1>
                <p>Create styleguides to organize components, colors, text styles, and spacing tokens.</p>
                <div className='middle-page'>
                    <div className="email-register">
                        <input type="email" placeholder="Register using your email address" />
                        <button>Register</button>
                    </div>
                    <img src={phone2} alt="Phone" />
                </div>
            </div>
            <div className="image-content">
                <img src={whatsapp} alt="WhatsApp" className='whatsapp-image' style={{marginLeft: '40px'}}/>
                <div style={{marginLeft: '333px', marginTop: '-23px'}}>
                    <img src={phone1} alt="Phone"/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
