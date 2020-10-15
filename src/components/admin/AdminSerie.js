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
        const apiRes1 = await handler.getAll("Serie");

        this.setState({ medias: apiRes1.data });

        console.log("series have been mounted captain !")
    };



    handleDelete = async (id) => {

        await handler.deleteOne(id);

        const allMedia = await handler.getAll("Serie");

        this.setState({ medias: allMedia.data });
        console.log("hey gurl !!! you can delete series")
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
                                    <button
                                        onClick={() => this.handleDelete(media._id)}>
                                        x
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }
}
