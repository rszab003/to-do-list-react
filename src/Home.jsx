import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task"



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currTasks: props.UserList
        }
    }

    componentDidMount() {
        console.log("BACK TO HOMEPAGE!!")
        console.log(this.state.currTasks);
      }

    // static getDerivedStateFromProps(props, state) {
    //     return {currTasks: props.UserList}
    // }

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
                    this.props.UserList.map(function(task) {
                        return (
                            <Task key={task.id} id={task.id} task={task.task} category={task.Category} date={task.Date} />
                        );
                    })
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
