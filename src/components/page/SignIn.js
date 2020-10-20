import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import ".././styles/signin.scss";

export default class Signin extends Component {
    state = {
        // définition de valeurs de base pour la phase de dev ("mettre à chaîne vide une fois dev ok")
        email: "j.doe@foo.bar",
        password: "12345",
    };

    static contextType = AuthContext; // on associe le contexte d'authentification à la classe Signin (accessible via this.context)

    handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault(); //  no page refresh
        console.log("hello")
        this.context.signin(this.state, () => {
            this.props.history.push("/dashboard");
        });
    };

    render() {
        return (
            <form
                onChange={this.handleInput}
                onSubmit={this.handleSubmit}
                className="signin-form"
            >
                <h1 className="title">Connection</h1>

                <label htmlFor="email" className="label">
                    Email
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
                    Mot de passe
        </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="input"
                    defaultValue={this.state.password}
                    autoComplete="current-password"
                />
                <button className="btn">OK</button>
                <hr />
                <p className="signin-p">
                    Si vous n'avez pas encore de compte, c'est par{" "}
                    <Link className="link" to="/signup">
                        ici !
          </Link>
          .
        </p>
            </form>
        );
    }
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../auth/AuthContext";
// import ".././styles/signin.scss";

// export default class Signin extends Component {
//     state = {
//         // définition de valeurs de base pour la phase de dev ("mettre à chaîne vide une fois dev ok")
//         email: "j.doe@foo.bar",
//         password: "12345",
//     };

//     static contextType = AuthContext; // on associe le contexte d'authentification à la classe Signin (accessible via this.context)

//     handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

//     handleSubmit = (e) => {
//         e.preventDefault(); //  no page refresh
//         console.log("hello")
//         this.context.signin(this.state, () => {
//             this.props.history.push("/dashboard");
//         });
//     };

//     render() {
//         return (
//             <form
//                 onChange={this.handleInput}
//                 onSubmit={this.handleSubmit}
//                 className="signin-form"
//             >
//                 <h1 className="title">Connection</h1>

//                 <label htmlFor="email" className="label">
//                     Email
//         </label>
//                 <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="input"
//                     defaultValue={this.state.email}
//                     autoComplete="email"
//                 />
//                 <label htmlFor="password" className="label">
//                     Mot de passe
//         </label>
//                 <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="input"
//                     defaultValue={this.state.password}
//                     autoComplete="current-password"
//                 />
//                 <button className="btn">OK</button>
//                 <hr />
//                 <p className="signin-p">
//                     Si vous n'avez pas encore de compte, c'est par{" "}
//                     <Link className="link" to="/signup">
//                         ici !
//           </Link>
//           .
//         </p>
//             </form>
//         );
//     }
// }
