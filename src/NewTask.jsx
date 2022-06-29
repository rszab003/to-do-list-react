import React from "react";
import {Link, Navigate} from "react-router-dom";
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
                    >
                    </Form>
                 
                {this.state.redirect && <Navigate to="/" replace={true} state={{currList: this.state.currList}}></Navigate>}
            </div>
        );
    }
}

export default NewTask;
