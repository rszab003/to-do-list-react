import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task";
import "./styles/Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        if (props.UserList.length == 0) {
            console.log("DO WE HAVE SAVED TASKS?");
            var savedTasks = JSON.parse(localStorage.getItem("tasks"));
            if (savedTasks != null) {
                this.state = {
                    currTasks: savedTasks
                };
            }
            else {
                this.state = {
                    currTasks: props.UserList
                }
            }
            // console.log(this.state.currTasks);
        }
        else {
            this.state = {
                currTasks: props.UserList
            };
            // console.log("*********")
            // console.log(this.state.currTasks);
        }
        this.populateTasks = this.populateTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this)
        this.props.updateTasks(this.state.currTasks);
    }

    componentDidMount() {
        console.log("save again here?");
        localStorage.setItem("tasks", JSON.stringify(this.state.currTasks));
    }
    
    populateTasks() {
        const delTask = this.deleteTask;
        return (
        this.state.currTasks.map(function(task) {
            return (
                <Task key={task.id} id={task.id} task={task.task} category={task.Category} date={task.Date} delTask={delTask}
                />
            );
        })
        );
    }
    

    /** Handles task deletion on button click */
    deleteTask = (taskID) => {
        let tasks = this.state.currTasks;
        for (let i = 0; i < tasks.length; i++) {
            if (taskID == tasks[i]["id"]) {
                console.log(tasks[i]);
                tasks.splice(i, 1);
            }
        }
        this.setState({
            currTasks: tasks
        })

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    render() {
        return (
            <div>
                <h1 id="header-home">TO DO</h1>

                <table id="table">
                    <thead id="table-head" bgcolor="#3aa554">
                    <tr>
                        <th id="h-task">Leírás</th>
                        <th id="h-cat">Kategória</th>
                        <th id="h-date">Dátum</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.populateTasks()
                    }
                    </tbody>
                    
                </table>

               <Link to={"./newtask"}>
                    <button id="new-task-btn">Új hozzáadása</button>
               </Link>
            </div>
        );
    }
}

export default Home;
