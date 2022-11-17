import React from 'react';
function Footer() {
    return (

        <footer className="footer">
            <div className="footer-wrapper">
                <section className="social-media-icons">
                    <img className="img1" src={require('./../assets/img/facebook-icon.svg')} alt="img" />
                    <img className="img1" src={require('./../assets/img/linkedin-icon.svg')} alt="img" />
                    <img className="img1" src={require('./../assets/img/twitter-icon.svg')} alt="img" />
                </section>
                <section className="footer-links">
                    <span className="text-item">Search</span>
                    <span className="text-item">FAQ</span>
                    <span className="text-item">Return & Exchange Policy</span>
                    <span className="text-item">Contact</span>
                    <span className="text-item">Privacy Policy</span>
                    <span className="text-item">Terms of Service</span>
                </section>
            </div>
        </footer>
    );
}

export default Footer;