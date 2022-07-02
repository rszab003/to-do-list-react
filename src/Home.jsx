import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task";
import "./styles/Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        /** Check for saved tasks in local storage and add them to state */
        var savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (props.UserList.length == 0 && savedTasks != null) {
            this.state = {
                currTasks: savedTasks
            };
        }
        else {
            this.state = {
                currTasks: props.UserList
            };
        }

        this.populateTasks = this.populateTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this)
        this.props.updateTasks(this.state.currTasks);
    }

    /** React lifecycle method
     * when navigating back to index, this method is always called.
     * we save new and edited tasks to local storage here
     */
    componentDidMount() {
        localStorage.setItem("tasks", JSON.stringify(this.state.currTasks));
    }
    
    /**
     * 
     * @returns Array<Task> 
     * creates an array of tasks out of the "currTasks" Object array
     */
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
        /** update local storage upon task deletion */
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    render() {
        return (
            <div id="home-container">
                <h1 id="header-home">TO DO</h1>

                <table id="table">
                    <thead id="table-head" bgcolor="#1B512D">
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
