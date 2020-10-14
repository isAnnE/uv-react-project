import React from "react";
import '../styles/about.scss';
import thelma from '../img/thelmaandlouise.gif';

export default function About() {
    return (
        <div className="about">
            <h1 className="title">A propos de Ultraviolettes</h1>

            <p>Ces dernières années, le manque de représentation - ou la mé-représentation - des femmes dans le cinéma est de plus en plus discutée.
            Celles-ci sont très souvent limitées à un rôle d'épouse, de compagne ou de mère, "en appui" de personnages masculins centraux (comme le montre le Test de Bechdel, à découvrir en annexe).
                Des films et séries qui donnent une meilleure place aux femmes existent, mais sont souvent moins connus.</p>
            <p>C'est pourquoi Ultraviolettes a pour objectif de répertorier les films et séries rebelles qui donnent des rôles d'ampleur et d'intérêt aux femmes, au delà des stéréotypes de genre, ainsi que des docuentaires à intérpet féministe</p>
            <p>Les films, séries et documentaires faits par des réalisatrices, scénaristes et autres seront également mis en avant.</p>
            <img src={thelma} alt="Thelma and Louise" />
        </div>
    );
}
