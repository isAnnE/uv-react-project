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
        const apiRes1 = await handler.getAll("Film");

        this.setState({ medias: apiRes1.data });

        console.log("films have been mounted captain !")
    };



    handleDelete = async (id) => {

        await handler.deleteOne(id, "Films");

        const allMedia = await handler.getById("Film");

        this.setState({ medias: allMedia.data });
        console.log("hey gurl !!! you can delete all media")
    };

    render() {
        const { medias } = this.state;
        console.log("c'est bon t'as tout")

        return (

            <div className="mediatable">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <div className="first"> */}
                            <th className="cell id">ID</th>
                            <th className="cell">Name</th>
                            <th className="cell">Year</th>
                            <th className="cell">Country</th>
                            <th className="cell">Genre</th>
                            {/* </div> */}
                            {/* <div className="second"> */}
                            <th className="cell">Extract</th>
                            {/* </div> */}
                            {/* <div className="third"> */}
                            <th className="cell">Photo</th>
                            <th className="cell">Directed by</th>
                            <th className="cell">Written by</th>
                            <th className="cell">Produced by</th>
                            {/* </div> */}
                            {/* <div className="fourth"> */}
                            <th className="cell">Actors</th>
                            <th className="cell">Type</th>
                            <th className="cell">Edit</th>
                            <th className="cell">Delete</th>
                            {/* </div> */}
                        </tr>
                    </thead>
                    <tbody className="data">
                        {medias.map((media, i) => (
                            <tr key={i}>

                                {/* <div className="first"> */}
                                {/* <th className="cell id">ID</th> */}
                                <td className="cell id">{media._id}</td>
                                {/* </div> */}
                                <td className="cell">{media.name}</td>
                                <td className="cell">{media.year}</td>
                                <td className="cell">{media.country}</td>
                                <td className="cell">{media.genre}</td>

                                {/* <div className="second"> */}
                                <td className="cell">{media.extract}</td>
                                {/* </div> */}
                                {/* <div className="third"> */}
                                <td className="cell">{media.photo.url}</td>
                                <td className="cell">{media.directed_by}</td>
                                <td className="cell">{media.written_by}</td>
                                <td className="cell">{media.produced_by}</td>
                                {/* </div> */}
                                {/* <div className="fourth"> */}
                                <td className="cell">{media.acting}</td>
                                <td className="cell">{media.media_type}</td>
                                <td className="cell">
                                    <Link to={"/editadmin/" + media._id}><button> Edit media </button></Link>
                                </td>
                                <td className="cell">
                                    <button
                                        onClick={() => this.handleDelete(media._id)}>
                                        x
                  </button></td>
                                {/* </div> */}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
