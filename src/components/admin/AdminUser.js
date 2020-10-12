import React, {
    Component
} from "react";
import {
    APIHandler
} from "../api/handler";
import "./adminuser.scss";

const handler = new APIHandler("api/user");

export default class AdminUsers extends Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        const apiRes = await handler.getAll();
        this.setState({
            users: apiRes.data
        });
        console.log("hey gurl !!! you just did something")
    }




    handleDelete = async (id) => {
        await handler.deleteOne(id);
        const apiRes2 = await handler.getById();
        this.setState({
            products: apiRes2.data
        });
        console.log("hey gurl !!! you just deleted a nasty troll")
    };

    render() {
        const {
            users
        } = this.state;
        return (<div className="userboard" >
            <h1 className="title" > Supprimer un user </h1>
            <table className="table" >
                <thead >
                    <tr >
                        <th className="cell id" > ID </th>
                        <th className="cell" > Firstname </th>
                        <th className="cell" > Username </th>
                        <th className="cell" > Lastname </th>
                        <th className="cell" > Email </th>
                        {/* <th className="cell" > Admin </th> */}
                        <th className="cell" > delete </th>
                    </tr >
                </thead>
                <tbody > {users.map((user, i) => (
                    <tr key={i}>
                        <td className="cell id" >
                            {user._id}
                        </td>
                        <td className="cell" > {users.first_name} </td>
                        <td className="cell"> {user.username_name} </td>
                        <td className="cell"> {user.last_name} </td>
                        <td className="cell" > {user.email} </td>
                        {/* <td className="cell" > {user.is_admin} </td> */}
                        <td className="cell" >
                            <button onClick={() => this.handleDelete(user._id)}> x </button>
                        </td >
                    </tr>
                ))
                }
                </tbody>
            </table >
        </div>
        );
    }
}