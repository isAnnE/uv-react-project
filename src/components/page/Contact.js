import React from "react";
import '../styles/contact.scss';
import gaga from '../img/gaga.webp';


export default function Contact() {
    return (
        <div className="contact">
            <h1 className="title">Contactez-nous</h1>
            <p>Formulaire à venir</p>
            <img src={gaga} alt="gaga phone" className="gaga" />
        </div>

    );
}
