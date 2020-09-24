import React from 'react';
import '../styles/notfound.scss';
import techdiff from '../img/notfound.gif';

export default function NotFound() {
    return (
        < div className="notfound" >
            <h1 className="title" > Not found !</h1>
            <p> La page que vos cherchez est introuvable. </p>
            <img src={techdiff} alt="404" className="pic" />
        </div>
    )
}