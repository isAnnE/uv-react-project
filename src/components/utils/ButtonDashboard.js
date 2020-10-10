import React from "react";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import

export default function ButtonSignout() {
    return (
        <a className="link" href="/signin">
            <FontAwesomeIcon
                size="1x"
                className="is-clickable icon dashboard"
                icon={faUser}
            />
        </a>
    );
}