import React from 'react';
import '../styles/mentions.scss';
import legally from '../img/legally.gif';

export default function Mentions() {
    return (
        < div className="mentions" >
            <h1 className="title" > Mentions Légales</h1>
            <p> Le site Ultraviolettes est un projet d'études et un site non-lucratif à visée informative et communautaire. </p>
            <p> Ultraviolettes est hébergé par <a href="https://www.infomaniak.com/fr" target="_blank" rel="noopener noreferrer">Infomaniak</a>, hébergeur éco-responsable.

            </p>
            <img src={legally} alt="legal" className="pic" />
        </div>
    )
}