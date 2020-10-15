import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { APIHandler } from "../api/handler";
import '../styles/media.scss';


const mediaHandler = new APIHandler("api/media");

export default class mediaList extends Component {
    state = {
        medias: [],
    };

    async componentDidMount() { // pour intégragir avec data serveur back
        console.log(this.props.mediaType)
        console.log("component mounted ! > MediaList a été 'accroché' au DOM de React");
        // en bref : fait l'appel AJAX pour get tous les produits seulement une fois que le component ProductList a été accroché au DOM virtuel de React
        const apiRes = await mediaHandler.getAll(this.props.mediaType); // return une Promise
        this.setState({ medias: apiRes.data });
    }

    render() {
        console.log("render !!!");

        const { medias } = this.state;
        return (
            <div className="media-displayer">
                {/* <h1 className="title">Tous les {}</h1> */}
                {/* afficher le type de media dans le titre */}

                {medias.map((media, i) => (
                    <div className="mediatile">

                        <h3 key={i}>{`${media.name}`}</h3>

                        <ul className="infolist">
                            <li key={i}>Année de sortie: {`${media.year}`}</li>
                            <li key={i}>Résumé: {`${media.intro}`}</li>
                            <li key={i}>Pays d'origine: {`${media.country}`}</li>
                            <li key={i}>Genre: {`${media.genre}`}</li>
                            <li key={i}>Réalisation: {`${media.directed_by}`}</li>
                            <li key={i}>Scenario: {`${media.written_by}`}</li>
                            <li key={i}>Production: {`${media.produced_by}`}</li>
                            <li key={i}>Acteur.ice.s: {`${media.acting}`}</li>
                        </ul>

                        <div className="img" key={i}>{`${media.photo.url}`}</div>

                    </div>
                ))}
            </div>
        );
    }
}