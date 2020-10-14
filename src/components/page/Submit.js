// import React, { Component } from "react";
// // import "./../styles/mod.form.css";

// import { apiHandler } from "../api/handler";
// const handler = apiHandler();

// export default class Contact extends Component {
//     state = {
//         // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
//         full_name: "Mon username",
//         email: "emailpardefault.com",
//         subject: "Nom du film",
//         message: "Ce film mérite d'être sur le site car ...",
//     };

//     handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

//     handleSubmit = async (e) => {
//         e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
//         const { full_name, email, subject, message } = this.state; // destructuration de l'objet this.state
//         try {
//             await handler.post("/api/submit", {
//                 full_name,
//                 email,
//                 subject,
//                 message,
//             });
//         } catch (err) {
//             console.error(err.response.message);
//         }
//     };

//     render() {
//         return (
//             <form
//                 className="form"
//                 onChange={this.handleChange}
//                 onSubmit={this.handleSubmit}
//             >
//                 <h1 className="title">Suggérer un film</h1>
//                 <label htmlFor="full_name" className="label">
//                     Votre username :
//         </label>
//                 <input
//                     name="full_name"
//                     id="full_name"
//                     type="text"
//                     className="input"
//                     defaultValue={this.state.full_name}
//                 />
//                 <label htmlFor="email" className="label">
//                     Indiquez votre email :
//         </label>
//                 <input
//                     name="email"
//                     type="email"
//                     className="input"
//                     defaultValue={this.state.email}
//                 />
//                 <label htmlFor="filmname" className="label">
//                     Nom du film / série / documentaire :
//         </label>
//                 <input
//                     name="filmname"
//                     id="filmname"
//                     type="text"
//                     className="input"
//                     defaultValue={this.state.filmname}
//                 />
//                 <label htmlFor="description" className="label">
//                     Décrivez-nous pourquoi ce film mérite d'être sur Ultraviolettes :
//         </label>
//                 <textarea
//                     name="description"
//                     id="description"
//                     className="input"
//                     defaultValue={this.state.description}
//                 ></textarea>
//                 <button className="btn">ok</button>
//             </form>
//         );
//     }
// }
