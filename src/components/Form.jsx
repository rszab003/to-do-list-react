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
        this.changeFormState = this.changeFormState.bind(this);
    }

    changeFormState(event) {
        // console.log(this.props.task)
        if (event.target.id == "task") {
            this.setState({
                task: event.target.value
            });
            // console.log("new state" + this.state.task)
        }
        else if (event.target.id == "category") {
            this.setState({
                cat: event.target.value
            });
            // console.log("new state" + this.state.cat)
        }
        else { //handles date selection
            this.setState({
                date: event.target.value
            });
            // console.log("new state" + this.state.date)
        }
    }
    render() {
        return (
            <div>
                <form acceptCharset="utf-8" onSubmit={this.props.parseInput}>
                    
                    <label>Leírás</label>
                    <div>
                    <input type="text"
                        
                        id="task"
                        defaultValue={this.props.task}
                        onChange={this.changeFormState}
                    />
            </div>
            
            
                <label>
                    Kategória
                </label>
                <div>
                <input
                type="text"
                id="category"
                defaultValue={this.props.cat}
                onChange={this.changeFormState}
                    />
                </div>


                {/*BAD INPUT Label code */}
                {this.props.showBadInput && 
                <label type="text">Kategória max. 50 karakter lehet!</label>
                }
            
            
                <label>Dátum</label>
                <div>
                <input 
                type="date"
                id="date"
                defaultValue={this.state.date}
                onChange={this.changeFormState}/>
                </div>
                
        
        <div id="buttons">
            <button id="save-btn" type="submit">Mentés</button>
            <Link to="/">
            <button id="back-btn">Vissza</button> 
            </Link>
        </div>
        </form>
            </div>
        );
    }
}

export default Form;
