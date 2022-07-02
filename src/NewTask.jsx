import React from "react";
import {Navigate} from "react-router-dom";
import Form from "./components/Form";
import "./styles/NewTask.css";


class NewTask extends React.Component {

    constructor(props) {
        super(props);
        // const navigator = useNavigate()
        this.state = {
            redirect: false,
            badUsage: false,
            task: "",
            cat: "",
            date: "",
            currTasks: this.props.UserList 
        };
        console.log("Making a new task with existing data:::")
        console.log(this.state.currTasks)
        // this.updateState = this.updateState.bind(this);
        this.parseInput = this.parseInput.bind(this);
    }

    parseInput(event) {
        event.preventDefault();
        /** create new ID for task, then a new task object */
        const newId = this.state.currTasks.length + 1;
        const newTask = {
            id: newId,
            task: event.target[0].value,
            Category: event.target[1].value,
            Date: event.target[2].value
        }

        /*check if category exceeds 50 chars */
        if (newTask.Category.length > 50) {
            // console.log("WE HAVE exceeded 50 chars")
            this.setState({
                badUsage: true
            });
            return;
        }
        // console.log(this.state.currTasks);
        let t = this.state.currTasks;
        t.push(newTask);
        // this.state.currTasks.push(newTask);
        this.setState({
            currTasks: t
        })  
        
        //update in parent App component
        this.props.updateTasks(this.state.currTasks);

        this.setState( {
            redirect: true
        })
    }

    // updateState(newList) {
    //     this.setState({
    //         redirect: true,
    //         currTasks: newList
    //     });
    //     // console.log(newList);
    // }
    
    render() {
        return (
            <div id="task-container">
                <h1>Új hozzáadása</h1>
                <Form task={this.state.taskContent}
                    cat={this.state.taskCategory}
                    date={this.state.taskDate}
                    currTasks={this.state.currTasks}
                    updateState={this.updateState}
                    parseInput={this.parseInput}
                    showBadInput={this.state.badUsage}
                    >
                    </Form>
                 
                {this.state.redirect && <Navigate to="/" replace={true} state={{currList: this.state.currList}}></Navigate>}
            </div>
        );
    }
}

export default NewTask;
