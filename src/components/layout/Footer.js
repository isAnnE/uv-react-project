import React from "react";
import twitter from '../img/twitterlogo.svg';
import instagram from '../img/instagram.svg';
import facebook from '../img/logofb.svg';

export default function Footer() {
    return (
        <>
            <footer id="footer-main">
                <div id="purpleline"></div>
                <section id="footerdata">
                    <p><a href="mentions">Mentions Légales</a></p>
                    <p><a href="contact">Contact</a></p>
                </section>

                <div id="logos">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" ><img className="logo" src={twitter} alt="twitter" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="logo" src={instagram} alt="instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="logo" src={facebook} alt="facebook" /></a>
                </div>
            </footer>
        </>
    );
}