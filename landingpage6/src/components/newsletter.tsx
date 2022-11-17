import React from 'react';
import newslettericon from './../assets/img/newsletter-icon.svg';

function Newsletter() {
    return (
        <div className="newsletter">
            <h3 className="newsletter-title">
            CONNECT WITH US
            </h3>
            <section className="newsletter_input-section">
            <input type="text" placeholder="Enter your email" className="input-newsletter"/>
            <img src={newslettericon} className="newsletter_input-section--icon" alt="newsletter-icon" />
            </section>
        </div>
    );
}

export default Newsletter;