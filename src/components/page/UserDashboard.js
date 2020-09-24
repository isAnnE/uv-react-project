import React, { useContext } from "react";
import AuthContext from "./../components/auth/AuthContext";
import UserInfos from "./../components/UserInfos";

export default function Dashboard() {
    // dans un component fonctionnel, on accède au contexte via le "hook" useContext
    // read the doc : https://fr.reactjs.org/docs/hooks-reference.html
    const AuthContextValue = useContext(AuthContext);
    console.log("AuthContextValue ? >>> ", AuthContextValue);

    return (
        Boolean(AuthContextValue.currentUser) && (
            <div>
                <h1 className="title">Dashboard</h1>
                <p>Welcome {AuthContextValue.currentUser.first_name} !</p>
                <hr />
                <UserInfos context={AuthContextValue} />
                {Boolean(AuthContextValue.currentUser.role === "admin") && (
                    <div>ADMIN LINKS HERE</div>
                )}
            </div>
        )
    );
}
