import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task";
import "./styles/Home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currTasks: props.UserList
        }

        this.populateTasks = this.populateTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this)
        console.log("OR NOW???")
    }

    componentDidMount() {
        console.log("LOAD THE TASKS NOW!!!")
    }

    componentWillUnmount() {
        console.log("SAVE THE TASKS NOW!!!");
    }

    populateTasks() {
        const delTask = this.deleteTask;
        return (
        this.props.UserList.map(function(task) {
            return (
                <Task key={task.id} id={task.id} task={task.task} category={task.Category} date={task.Date} delTask={delTask}
                 />
            );
        })
        );
    }
    
    deleteTask = (taskID) => {
        let tasks = this.state.currTasks;
        console.log(tasks);
        for (let i = 0; i < tasks.length; i++) {
            if (taskID == tasks[i]["id"]) {
                console.log(tasks[i]);
                tasks.splice(i, 1);
            }
        }

        console.log(tasks)
        this.setState({
            currTasks: tasks
        })
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
