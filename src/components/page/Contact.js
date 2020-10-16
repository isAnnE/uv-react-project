import React, {
    Component
} from "react";
// import "./../styles/mod.form.css";

import {
    APIHandler
} from "../api/handler";

const handler = new APIHandler("api/contact");

export default class Contact extends Component {
    state = {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        full_name: "Mon username",
        email: "mon.email@gmail.com",
        subject: "Sujet du message",
        message: "Mon message",
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (e) => {
        console.log("start")
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
        const { full_name, email, subject, message } = this.state; // destructuration de l'objet this.state
        console.log("continue")
        try {
            await handler.postOne({
                full_name,
                email,
                subject,
                message,
            });
            console.log("successful")
        }
        catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <form
                className="form"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <h1 className="title">Contact</h1>
                <label htmlFor="full_name" className="label">
                    Votre nom :
        </label>
                <input
                    name="full_name"
                    id="full_name"
                    type="text"
                    className="input"
                    defaultValue={this.state.full_name}
                />
                <label htmlFor="email" className="label">
                    Votre email :
        </label>
                <input
                    name="email"
                    type="email"
                    className="input"
                    defaultValue={this.state.email}
                />
                <label htmlFor="subject" className="label">
                    Sujet du message :
        </label>
                <input
                    name="subject"
                    id="subject"
                    type="text"
                    className="input"
                    defaultValue={this.state.subject}
                />
                <label htmlFor="message" className="label">
                    Message :
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