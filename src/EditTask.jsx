import React from "react";
import Form from "./components/Form";

class EditTask extends React.Component {
    
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <div>
               <h2>EDIT TASK</h2>
               <Form task={this.props.task}></Form>
           </div>
        );
    }
}

export default EditTask;
