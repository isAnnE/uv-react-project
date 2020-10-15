import React, {
    useContext
} from "react";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faUserSlash
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../auth/AuthContext";


export default function ButtonSignout() {
    const AuthContextValue = useContext(AuthContext);

    const handleSignout = () => {
        AuthContextValue.signout();
    };

    return ( <
        FontAwesomeIcon size = "1x"
        className = "is-clickable"
        icon = {
            faUserSlash
        }
        onClick = {
            handleSignout
        }
        /> 
    )
}