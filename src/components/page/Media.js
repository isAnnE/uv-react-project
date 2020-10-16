import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { APIHandler } from "../api/handler";
import '../styles/media.scss';

// var cl = new cloudinary.Cloudinary({ cloud_name: "dol6lso5o", secure: true });

// cloudinary.v2.uploader.upload("https://www.example.com/mysample.jpg",
//     { public_id: "photo media" },
//     function (error, result) { console.log(result); });

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
                {medias.map((media, i) => (
                    <div className="mediatile">

                        <div className="img" key={i}> {`${media.photo.url}`}</div>

                        <div className="infos">
                            <h3 key={i}>{`${media.name}`}</h3>
                            <ul className="infolist">
                                {/* <li key={i}>Résumé: {`${media.intro}`}</li> */}
                                <li key={i}>Réalisation: {`${media.directed_by}`}</li>
                                <li key={i}>Scenario: {`${media.written_by}`}</li>
                                <li key={i}>Acteur.ice.s: {`${media.acting}`}</li>
                                {/* <li key={i}>Année de sortie: {`${media.year}`}</li> */}
                                {/* <li key={i}>Pays d'origine: {`${media.country}`}</li> */}
                                {/* <li key={i}>Genre: {`${media.genre}`}</li> */}
                                {/* <li key={i}>Production: {`${media.produced_by}`}</li> */}

                            </ul>

                        </div>
                        <div className="button">
                            <button className="buttonlink">
                                <a href="" className="link">
                                    <p className="video">Visionner un extrait</p>
                                </a>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        );
    }
}



// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// import { APIHandler } from "../api/handler";
// import '../styles/media.scss';
// import Default from '../img/movie-default.jpg';


// const mediaHandler = new APIHandler("api/media");

// export default class mediaList extends Component {
//     state = {
//         medias: [],
//     };

//     async componentDidMount() { // pour intégragir avec data serveur back
//         console.log(this.props.mediaType)
//         console.log("component mounted ! > MediaList a été 'accroché' au DOM de React");
//         // en bref : fait l'appel AJAX pour get tous les produits seulement une fois que le component ProductList a été accroché au DOM virtuel de React
//         const apiRes = await mediaHandler.getAll(this.props.mediaType); // return une Promise
//         this.setState({ medias: apiRes.data });
//     }

//     render() {
//         console.log("render !!!");

//         const { medias } = this.state;
//         return (
//             <div className="container">
//                 {/* <h1 className="title">Tous les {}</h1> */}
//                 {/* afficher le type de media dans le titre */}

//                 {medias.map((media, i) => (
//                     <div className="card-container">
//                         <div className="onecardcontainer">
//                             <div className="card">
//                                 <figure className="front">
//                                     {/* <img src={Default} className="img" /> */}
//                                     <h1>FRONT</h1>
//                                 </figure>


//                                 <figure className="back">
//                                     <ul className="infolist">
//                                         <h3 key={i}>{`${media.name}`}</h3>
//                                         <li key={i}>Année de sortie: {`${media.year}`}</li>
//                                         <li key={i}>Résumé: {`${media.intro}`}</li>
//                                         <li key={i}>Pays d'origine: {`${media.country}`}</li>
//                                         <li key={i}>Genre: {`${media.genre}`}</li>
//                                         <li key={i}>Réalisation: {`${media.directed_by}`}</li>
//                                         <li key={i}>Scenario: {`${media.written_by}`}</li>
//                                         <li key={i}>Production: {`${media.produced_by}`}</li>
//                                         <li key={i}>Acteur.ice.s: {`${media.acting}`}</li>
//                                     </ul>
//                                     <button className="extractbutton"><a href="">Voir un extrait</a></button>

//                                 </figure>

//                                 {/* <div className="img" key={i}>{`${media.photo.url}`}</div> */}

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }