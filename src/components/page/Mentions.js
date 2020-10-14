import React from 'react';
import '../styles/mentions.scss';
import legally from '../img/legally.gif';

export default function Mentions() {
    return (
        < div className="mentions" >
            <h1 className="title" >Mentions légales</h1>
            <h3>En vigueur au 14/10/2020</h3>

            <p> Le site Ultraviolettes est un projet d'études
   et un site non-lucratif à visée informative et communautaire. </p>
            <p>Il est la propriété de sa conceptrice et webmastresse Anne Morren,
    domiciliée au 1 rue Auguste Renoir, à Aulnay-sous-Bois.</p>
            <p>L’ensemble de ce site relève de la législation française et internationale
            sur le droit d’auteur et la propriété intellectuelle. Tous les droits de
 reproduction de <span>contenus textuels</span> sont réservés. </p>
            <p>La reproduction de tout
            ou partie de ce site sur quelque support que ce soit est formellement
 interdite sauf notre autorisation expresse. </p>
            <p> Ultraviolettes est hébergé par
    <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer"> Heroku</a>.</p>
            <img src={legally} alt="legal" className="pic" />
        </div>
    )
}






