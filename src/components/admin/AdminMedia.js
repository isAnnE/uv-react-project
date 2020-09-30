import React, {
    Component
} from "react";
// import axios from 'axios';
import {
    APIHandler
} from "../api/handler";
import "./adminmedia.scss";

const handler = new APIHandler("api/media");


export default class AdminMedia extends Component {
    state = {
        media_type: "Film"
    };

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })

    };

    sendNewMedia = async (event) => {
        event.preventDefault();
        await handler.postOne(this.state);


    }

    render() {
        // const { medias } = this.state;
        // console.log("c'est bon t'as tout")

        return (
            <div>

                <form onChange={this.handleChange} className="addmedia">
                    <label>Name:<input type="text" name="name" /></label>
                    <label>Year:<input type="number" name="year" /></label>
                    <label>Intro:<input type="text" name="intro" /></label>
                    <label>Country:<input type="text" name="country" /></label>
                    <label>Genre:<input type="text" name="genre" /></label>
                    <label>Extract:<input type="text" name="extract" /></label>
                    <label>Directed by:<input type="text" name="directed_by" /></label>
                    <label>Written by:<input type="text" name="written_by" /></label>
                    <label>Produced by:<input type="text" name="produced_by" /></label>
                    <label>Acting:<input type="text" name="acting" /></label>
                    <select name="media_type">
                        <option selected value="Film">Film</option>
                        <option value="Serie">Série</option>
                        <option value="Documentaire">Documentaire</option>
                    </select>
                    <input onClick={this.sendNewMedia} type="submit" value="Submit" />
                </form>
            </div >


        );
    }
}
