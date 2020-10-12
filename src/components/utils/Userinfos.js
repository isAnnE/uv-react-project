import React, { Component } from "react";
import { APIHandler } from ".././api/handler";
import "../styles/userinfos.scss";

const handler = new APIHandler("api/user");

export default class UserInfos extends Component {
    state = {
        isEditMode: false,
        first_name: "",
        last_name: "",
        email: "",
    };

    handleChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    updateUser = async (e) => {
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page

        try {
            const apiRes = await handler.patchOne(
                this.props.context.currentUser._id, { // ci-dessous : prend la valeur du state (si modifié) OU la valeur originale provenant de AuthContext
                first_name: this.state.first_name || this.props.context.currentUser.first_name,
                last_name: this.state.last_name || this.props.context.currentUser.last_name,
                email: this.state.email || this.props.context.currentUser.email,
            }
            );
            this.props.context.setCurrentUser(apiRes.data); // mise à jour AuthContext avec les nouvelles infos user
        } catch (apiErr) {
            console.error(apiErr);
        }
    };

    render() {
        return (
            <div className="userboard">

                <form onChange={
                    this.handleChange
                }
                    onSubmit={
                        this.updateUser
                    }
                    className="form" >
                    <h2 className="title" > Mes infos </h2>
                    <input className="input"
                        type="text"
                        name="first_name"
                        defaultValue={
                            this.props.context.currentUser.first_name
                        } />

                    <input className="input"
                        type="text"
                        name="last_name"
                        defaultValue={
                            this.props.context.currentUser.last_name
                        } />

                    <input className="input"
                        type="text"
                        name="email"
                        defaultValue={this.props.context.currentUser.email} />
                    <button className="btn" > update infos </button>
                </form>
                <button className="filmform"><a href="/submit">Suggérer un film</a></button>
            </div>
        );
    }
}