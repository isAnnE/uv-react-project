import React, { Component } from "react";
import AuthContext from "../auth/AuthContext";
import { Link } from "react-router-dom";
// import "./../styles/mod.form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class Signup extends Component {
    state = {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        first_name: "Jane",
        last_name: "Doe",
        email: "j.doe@foo.bar",
        password: "12345",
    };

    static contextType = AuthContext; // la classe Signup est désormais 'abonnée' au AuthProvider, il consome les infos du provider
    // 

    fileInput = React.createRef(); // on créé une référence ici, utilisée sur le l'input file plus bas
    // https://fr.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

    handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (e) => {
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page

        const { first_name, last_name, email, password } = this.state; // destructuration de l'objet this.state
        const avatar = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
        const fd = new FormData(); // formData est obligatoire pour envoyer des files (ex: avatar) vers le backend
        // check la doc : https://developer.mozilla.org/fr/docs/Web/API/FormData

        fd.append("first_name", first_name); // on ajoute des,
        fd.append("last_name", last_name); // clé / valeurs,
        fd.append("email", email); // dans l'objet ...
        fd.append("password", password); // fd :D

        if (avatar) fd.append("avatar", avatar);
        // avant de passer l'objet formData (fd) à components/auth/AuthProvider
        // la ligne déclarée plus haut (static contextType) est accessible via this.context
        this.context.signup(fd, () => {
            this.props.history.push("/signin"); // redirection vers la page de signin
        });
    };

    render() {
        return (


            <form
                onChange={this.handleInput}
                onSubmit={this.handleSubmit}
                className="form"
            >
                <h1 className="title">Inscription</h1>
                <p>Vous avez des idées de films, séries ou documentaires qui ont leur place sur le site ?
                    Inscrivez-vous pour pouvoir nous les proposer.</p>
                <label htmlFor="first_name" className="label">
                    first name
        </label>
                <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    className="input"
                    defaultValue={this.state.first_name}
                    autoComplete="given-name"
                />
                <label htmlFor="last_name" className="label">
                    last name
        </label>
                <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    className="input"
                    defaultValue={this.state.last_name}
                    autoComplete="family-name"
                />
                <label htmlFor="email" className="label">
                    email
        </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    defaultValue={this.state.email}
                    autoComplete="email"
                />
                <label htmlFor="password" className="label">
                    password
        </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="input"
                    defaultValue={this.state.password}
                    autoComplete="current-password"
                />
                {/* <label htmlFor="avatar" className="label">
                    <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    className="is-hidden"
                    ref={this.fileInput} // la référence créé dans la classe est associée à cet input file
                /> */}
                <button className="btn">ok</button>
                <hr />
                <p>
                    Already have an account ? please{" "}
                    <Link className="link" to="/signin">
                        sign in
          </Link>
          .
        </p>
            </form>
        );
    }
}
