import React, {
    Component
} from "react";
// import axios from 'axios';
import {
    APIHandler
} from "../api/handler";
import "./editmedia.scss";

const handler = new APIHandler("api/media");


export default class EditMedia extends Component {
    state = {

    };

    async componentDidMount() {
        const media = await handler.getById(this.props.match.params.id);
        this.setState(media.data);

        console.log("media for editing is here")
    };

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })

    };

    sendNewMedia = async (event) => {
        event.preventDefault();
        await handler.patchOne(this.props.match.params.id, this.state);


    }

    render() {
        // const { medias } = this.state;
        // console.log("c'est bon t'as tout")

        return (
            <div className="main">

                <form onChange={this.handleChange} className="addmedia">
                    <label>Name:<input value={this.state.name} type="text" name="name" /></label>
                    <label>Year:<input value={this.state.year} type="number" name="year" /></label>
                    <label>Intro:<input value={this.state.intro} type="text" name="intro" /></label>
                    <label>Country:<input value={this.state.country} type="text" name="country" /></label>
                    <label>Genre:<input value={this.state.genre} type="text" name="genre" /></label>
                    <label>Extract:<input value={this.state.extract} type="text" name="extract" /></label>
                    <label>Photo:<input value={this.state.photo} type="text" name="photo" /></label>
                    <label>Directed by:<input value={this.state.directed_by} type="text" name="directed_by" /></label>
                    <label>Written by:<input value={this.state.written_by} type="text" name="written_by" /></label>
                    <label>Produced by:<input value={this.state.produced_by} type="text" name="produced_by" /></label>
                    <label>Acting:<input value={this.state.acting} type="text" name="acting" /></label>
                    <select value={this.state.media_type} name="media_type">
                        <option selected value="Film">Film</option>
                        <option value="Serie">Série</option>
                        <option value="Documentaire">Documentaire</option>
                    </select>
                    <input onClick={this.sendNewMedia} type="submit" value="Submit" className="button" />
                </form>

                <button><a href="/adminishere">Back to admin</a></button>
            </div >


        );
    }
}
