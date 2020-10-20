import React, {
    Component
} from "react";
import "../styles/submit.scss"

import {
    APIHandler
} from "../api/handler";

const handler = new APIHandler("api/submit");

export default class Submit extends Component {
    state = {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        full_name: "Mon username",
        email: "emailpardefault@gmail.com",
        subject: "Nom du film",
        message: "Ce film mérite d'être sur le site car ...",
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (e) => {
        console.log("submit start")
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
        const { full_name, email, subject, message } = this.state; // destructuration de l'objet this.state
        console.log("submit continue")
        try {
            await handler.postOne({
                full_name,
                email,
                subject,
                message,
            });
            console.log("submitsuccessful")
        }
        catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <form
                className="submitform"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <h1 className="title">Proposer un film, série, ou documentaire</h1>
                <label htmlFor="full_name" className="label">
                    Mon nom
        </label>
                <input
                    name="full_name"
                    id="full_name"
                    type="text"
                    className="input"
                    defaultValue={this.state.full_name}
                />
                <label htmlFor="email" className="label">
                    Mon mail
        </label>
                <input
                    name="email"
                    type="email"
                    className="input"
                    defaultValue={this.state.email}
                />
                <label htmlFor="subject" className="label">
                    Nom du film
        </label>
                <input
                    name="subject"
                    id="subject"
                    type="text"
                    className="input"
                    defaultValue={this.state.subject}
                />
                <label htmlFor="message" className="label">
                    Description
        </label>
                <textarea
                    name="message"
                    id="message"
                    className="input"
                    defaultValue={this.state.message}
                ></textarea>
                <button className="btn">OK</button>
            </form>
        );
    }
}