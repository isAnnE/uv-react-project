import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { APIHandler } from "../api/handler";
import "./adminmedia.scss";

const handler = new APIHandler("api/media");


export default class AdminMedia extends Component {
    state = {
        medias: [],
    };

    async componentDidMount() {
        const apiRes1 = await handler.getAll("Documentaire");

        this.setState({ medias: apiRes1.data });

        console.log("series have been mounted captain !")
    };


    handleDelete = async (id) => {

        await handler.deleteOne(id, "Documentaires");

        const allMedia = await handler.getById("Documentaire");

        this.setState({ medias: allMedia.data });
        console.log("hey gurl !!! you can delete series")
    };

    // handleEdit = async (id) => {

    //     await handler.editOne(id, "Documentaires");

    //     const allMedia = await handler.getAll("Documentaire");

    //     this.setState({ medias: allMedia.data });
    //     console.log("editing function operational")
    // };

    handleEdit = async (e) => {
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
        console.log("hi")
        try {
            const apiRes3 = await handler.patch(
                "/api/media/" + this.props.currentMedia._id,
                { // ci-dessous : prend la valeur du state (si modifié) OU la valeur originale provenant de AuthContext
                    name: this.state.name,
                    year: this.state.year,
                    country: this.state.country,
                    // photo.url: this.state.photo.url,
                    media_type: this.state.media_type,
                }
            );
            this.props.context.setCurrentMedia(apiRes3.data); // mise à jour avec nouvelles infos
        } catch (apiErr) {
            console.error(apiErr);
        }
        console.log("ok it werks")
    };

    render() {
        const { medias } = this.state;
        console.log("c'est bon t'as tout")

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
                                    <Link to={"/editadmin/" + media._id}><button> Edit media </button></Link>
                                </td>
                                <td className="cell">
                                    <button onClick={() => this.handleDelete(media._id)}> x </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }
}
