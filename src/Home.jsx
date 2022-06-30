import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task"



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currTasks: props.UserList
        }

        this.populateTasks = this.populateTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this)
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
                <h1>TO DO</h1>

                <table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Date</th>
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
                    <button>NEW TASK</button>
               </Link>
            </div>
        );
    }
}

export default Home;
