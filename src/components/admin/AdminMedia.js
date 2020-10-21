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
    // on set le state
    state = {
        // default type
        media_type: "Film"
    };

    // quand il y a une nouvelle entrée, la valeur est prise en compte
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })

    };

    // puis postée en bdd lorsque le bouton submit est cliqué
    sendNewMedia = async (event) => {
        event.preventDefault();
        await handler.postOne(this.state);


    }

    render() {

        return (
            <div className="ajmedia">

                <form onChange={this.handleChange} className="addmedia">
                    <label>Name:<input type="text" name="name" /></label>
                    <label>Year:<input type="number" name="year" /></label>
                    <label>Intro:<input type="text" name="intro" /></label>
                    <label>Country:<input type="text" name="country" /></label>
                    <label>Genre:<input type="text" name="genre" /></label>
                    <label>Extract:<input type="text" name="extract" /></label>
                    <label>Photo:<input type="text" name="photo" /></label>
                    <label>Directed by:<input type="text" name="directed_by" /></label>
                    <label>Written by:<input type="text" name="written_by" /></label>
                    <label>Produced by:<input type="text" name="produced_by" /></label>
                    <label>Acting:<input type="text" name="acting" /></label>
                    <select name="media_type">
                        <option selected value="Film">Film</option>
                        <option value="Serie">Série</option>
                        <option value="Documentaire">Documentaire</option>
                    </select>
                    <input onClick={this.sendNewMedia} type="submit" value="Submit" className="buttonsubmit" />
                </form>
            </div >


        );
    }
}
