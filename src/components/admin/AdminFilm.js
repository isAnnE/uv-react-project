import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { APIHandler } from "../api/handler";
import "./adminmedia.scss";

// on va chercher notre handler, on lui donne le model adéquat, impératif de mettre "new"
const handler = new APIHandler("api/media");


export default class AdminMedia extends Component {
    state = {
        // array medias vide
        medias: [],
    };

    // https://javascript.info/async-await
    // async ensures that the function returns a promise, and wraps non-promises in it.
    // The keyword await makes JavaScript wait until that promise settles and returns its result.

    async componentDidMount() {
        // on le remplit avec tous les medias qui correspondent à l'enum "Film"
        const apiRes1 = await handler.getAll("Film");
        // on attend les infos du handler avant de set le state à nouveau
        this.setState({ medias: apiRes1.data });

        console.log("films have been mounted captain !")
    };


    // déclenché avec bouton delete
    handleDelete = async (id) => {
        // on supprimer un media grâce à son id
        await handler.deleteOne(id);
        // puis on recharge tous les films
        const allMedia = await handler.getAll("Film");
        // on rafraîchit le state 
        this.setState({ medias: allMedia.data });
        console.log("hey gurl !!! you can delete all media")
    };

    render() {
        const { medias } = this.state;
        console.log("State actuel chargé")

        return (

            <div className="mediatable">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="cell id">ID</th>
                            <th className="cell">Name</th>
                            <th className="cell">Year</th>
                            <th className="cell">Country</th>
                            <th className="cell">Genre</th>
                            <th className="cell">Extract</th>
                            <th className="cell">Photo</th>
                            <th className="cell">Directed by</th>
                            <th className="cell">Written by</th>
                            <th className="cell">Produced by</th>
                            <th className="cell">Actors</th>
                            <th className="cell">Type</th>
                            <th className="cell">Edit</th>
                            <th className="cell">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="data">
                        {medias.map((media, i) => (
                            <tr key={i}>
                                <td className="cell id">{media._id}</td>
                                <td className="cell">{media.name}</td>
                                <td className="cell">{media.year}</td>
                                <td className="cell">{media.country}</td>
                                <td className="cell">{media.genre}</td>
                                <td className="cell">{media.extract}</td>
                                <td className="cell">{media.photo.url}</td>
                                <td className="cell">{media.directed_by}</td>
                                <td className="cell">{media.written_by}</td>
                                <td className="cell">{media.produced_by}</td>
                                <td className="cell">{media.acting}</td>
                                <td className="cell">{media.media_type}</td>
                                <td className="cell">
                                    {/* Si on n'a pas accès à admin (not an admin) on n'a pas non plus accès à editadmin */}
                                    <Link to={"/editadmin/" + media._id}><button> Edit media </button></Link>
                                </td>
                                <td className="cell">
                                    <button
                                        onClick={() => this.handleDelete(media._id)}>
                                        x
                  </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
