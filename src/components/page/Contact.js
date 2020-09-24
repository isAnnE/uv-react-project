import React from "react";
import '../styles/contact.scss';
import gaga from '../img/gaga.webp';


export default function Contact() {
    return (
        <div className="contact">
            <h1 className="title">Contactez-nous</h1>
            <p>Par mail sur <a href="email" className="email">ultraviolettes@gmail.com</a> ou via nos réseaux sociaux.</p>
            <p>A bientôt !</p>
            <img src={gaga} alt="gaga phone" className="gaga" />
        </div>

    );
}
