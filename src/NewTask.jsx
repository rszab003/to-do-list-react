import React from "react";
import {Navigate} from "react-router-dom";
import Form from "./components/Form";


class NewTask extends React.Component {

    constructor(props) {
        super(props);
        // const navigator = useNavigate()
        this.state = {
            redirect: false,
            task: "",
            cat: "",
            date: "",
            currTasks: this.props.UserList 
        };
        this.updateState = this.updateState.bind(this);
        this.parseInput = this.parseInput.bind(this);
    }

    parseInput(event) {
        event.preventDefault();
        console.log("ARE WE STILL HERE?")
        const newIdx = this.state.currTasks.length + 1;
        const newTask = {
            id: newIdx,
            task: event.target[0].value,
            Category: event.target[1].value,
            Date: event.target[2].value
        }
        this.state.currTasks.push(newTask);
        this.setState({
            currTasks: this.state.currTasks
        })
        //update in parent App component
        console.log(")))))))")
        console.log(this.state.currTasks)
        this.updateState(this.state.currTasks);
    }

    updateState(newList) {
        this.setState({
            redirect: true,
            currTasks: newList
        });
        console.log(newList);
    }
    
    render() {
        return (
            <div>
                <h2>New Task</h2>
                <Form task={this.state.taskContent}
                    cat={this.state.taskCategory}
                    date={this.state.taskDate}
                    currTasks={this.state.currTasks}
                    updateState={this.updateState}
                    parseInput={this.parseInput}
                    >
                    </Form>
                 
                {this.state.redirect && <Navigate to="/" replace={true} state={{currList: this.state.currList}}></Navigate>}
            </div>
        );
    }
}

export default NewTask;
