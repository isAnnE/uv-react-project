import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import UserInfos from "../utils/Userinfos";
import "../styles/dashboard.scss";

export default function Dashboard() {
    // dans un component fonctionnel, on accède au contexte via le "hook" useContext
    // read the doc : https://fr.reactjs.org/docs/hooks-reference.html
    const AuthContextValue = useContext(AuthContext);
    console.log("AuthContextValue ? >>> ", AuthContextValue);

    return (
        Boolean(AuthContextValue.currentUser) && (
            <div className="dash">
                <h1 className="title">Mon profil</h1>
                <h2>Bienvenue {AuthContextValue.currentUser.first_name} !</h2>
                <hr />
                <p>Ici pouvez modifier vos coordonnées personnelles et soumettre une idée de film, série ou documentaire qui vous paraît avoir sa place sur le site</p>

                <UserInfos context={AuthContextValue} />




                {Boolean(AuthContextValue.isAdmin()) && (
                    <div className="adminaccess"> <h2>Mes accès admin</h2><button className="adminbtn"><a href="/adminishere">Vers base admin</a></button></div>



                )}


            </div>
        )
    );
}
