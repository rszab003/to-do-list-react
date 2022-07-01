import React from "react";
import Form from "./components/Form";
import {useParams, Navigate} from "react-router-dom";
import {useState} from "react";


function EditTask(props) {

    let {id} = useParams()
    let [redirect, setRedirect] = useState(false);
    let [badInput, setBadInput] = useState(false);
    let tasks = props.UserList;
    let taskToEdit = tasks.find(task => task.id == id.substring(1))
    // console.log("TASK TO EDIT")
    // console.log(taskToEdit);

    function parseInput(event) {
        event.preventDefault();
        taskToEdit["task"] = event.target[0].value;
        // console.log(taskToEdit["Category"])
        taskToEdit["Category"] = event.target[1].value;
        if (taskToEdit["Category"].length > 50) {
            setBadInput(!badInput);
            return;
        }
        // console.log(taskToEdit["Category"])
        // console.log(taskToEdit["Date"])
        taskToEdit["Date"] = event.target[2].value;
        /*index starts at 0, id starts at 1 */

        const idx = Number(id.charAt(1)) - 1;
        // props.UserList.splice(idx, 1);
        // console.log(taskToEdit["Date"])
        props.UserList[idx] = taskToEdit;
        setRedirect(true);
    }
    
    function updateState(changedTask) {
        console.log(changedTask);
        console.log(props.UserList);
    }
    
   
    return (
        <div>
            <h2>Szerkesztés: {taskToEdit["task"]}</h2>
            <Form 
            task={taskToEdit["task"]}
            cat={taskToEdit["Category"]}
            date={taskToEdit["Date"]}
            currTasks={props.UserList}
            updateState={updateState}
            parseInput={parseInput}
            showBadInput={badInput}
            >
            </Form>
            {redirect && <Navigate to="/" replace={true} state={{currList: props.UserList}}></Navigate>}
        </div>
    );
}


export default EditTask;
