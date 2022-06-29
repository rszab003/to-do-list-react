import React from "react";
import {Link} from "react-router-dom";


class Task extends React.Component {

    render() {
        return(
                <tr id={this.props.id}>
                    <td>{this.props.task}</td>
                    <td>{this.props.category}</td>
                    <td>{this.props.date}</td>
                    <td>
                        <Link to="/edittask">
                        <button >EDIT</button>
                        </Link>
                        <button>DELETE</button>
                    </td>
                </tr>
        );
    }
}

export default Task;
