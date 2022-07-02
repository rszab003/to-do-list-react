import React from "react";
import {useNavigate, useParams} from "react-router-dom";



function Task(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    return(
            <tr className="content" id={props.id}>
                <td>{props.task}</td>
                <td>{props.category}</td>
                <td>{props.date}</td>
                <td>
                    <button 
                    onClick={()=>navigate(`/edittask:${props.id}`)}
                    id="edit-btn"
                    >Szerkesztés</button>
                    <button onClick={()=>props.delTask(props.id)} id="delete-btn">Törlés</button>
                </td>
            </tr>
    );

}
export default Task;
