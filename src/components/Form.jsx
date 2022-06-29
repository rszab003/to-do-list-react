import { Link } from "react-router-dom";
import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            cat: this.props.cat,
            date: this.props.date,
            currTasks: this.props.currTasks
        }
        this.parseInput = this.parseInput.bind(this);
        this.changeFormState = this.changeFormState.bind(this);
    }

    parseInput(event) {
        event.preventDefault();
        console.log("ARE WE STILL HERE?")
        const newIdx = this.state.currTasks.length + 1;
        const newTask = {
            id: newIdx,
            task: this.state.task,
            Category: this.state.cat,
            Date: this.state.date
        }
        this.state.currTasks.push(newTask);
        this.setState({
            currTasks: this.state.currTasks
        })
        //update in parent App component
        console.log(")))))))")
        console.log(this.state.currTasks)
        this.props.updateState(this.state.currTasks);
        this.setState({
            redirect: true
        });
    }

    changeFormState(event) {
        if (event.target.id == "task") {
            this.setState({
                task: event.target.value
            });
            console.log("new state" + this.state.task)
        }
        else if (event.target.id == "category") {
            this.setState({
                cat: event.target.value
            });
            console.log("new state" + this.state.cat)
        }
        else { //handles date selection
            this.setState({
                date: event.target.value
            });
            console.log("new state" + this.state.date)
        }
    }

    render() {
        return (
            <div>
                <form acceptCharset="utf-8" onSubmit={this.parseInput}>
                    <div>
                        <label>
                            Task Name
                            <div>
                                <input type="text"
                                    
                                    id="task"
                                    default={this.props.task}
                                    onChange={this.changeFormState}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Category
                            <div>
                                <input type="text"
                                
                                id="category"
                                onChange={this.changeFormState}
                                 />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Date
                            <div>
                                <input type="date"
                                    
                                    id="date"
                                    value={this.state.date}
                                    onChange={this.changeFormState}
                                />
                            </div>
                        </label>
                    </div>
                    <button type="submit">
                        SAVE
                    </button>
                    <Link to="/">
                    <button>
                        Cancel Task
                    </button>
                </Link>
                </form>
            </div>
        );
    }
}

export default Form;
