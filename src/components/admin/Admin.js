import React from "react";
import "./admin.scss";
import videostore from "../img/videostore.gif";
import AdminUser from "./AdminUser";
import AdminMedia from "./AdminMedia";
import AdminFilm from "./AdminFilm";
import AdminSerie from "./AdminSerie";
import AdminDocumentaire from "./AdminDocumentaire";


export default function Admin() {
    return (<div className="admin" >
        < h1 > Bienvenue sur la base admin! </h1>
        < p > Ici tu peux gérer notre médiathèque: éditer des fiches
        media (film, série, documentaire) et si nécessaire, supprimer un ou une user qui ne respecte
        pas les valeurs de bienveillance du site. </p>
        <img src={
            videostore
        }
            className="videostore"
            alt="video store" />
        <h1 className="title">Ajouter un média</h1>
        <AdminMedia />
        <h1 className="title">Gérer les fiches films</h1>
        <AdminFilm />
        <h1 className="title">Gérer les fiches séries</h1>
        <AdminSerie />
        <h1 className="title">Gérer les fiches documentaires</h1>
        <AdminDocumentaire />
        <h1 className="title">Gérer les users</h1>
        <AdminUser />
    </div>
    );
}