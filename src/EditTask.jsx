import React from "react";
import Form from "./components/Form";
// import {withRouter} from "react-router-dom";
class EditTask extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired,
    // }

    render() {
        console.log("USER LIST")
        console.log(this.props.UserList)
        return (
           <div>
               <h2>EDIT TASK </h2>
               <Form></Form>
           </div>
        );
    }
}


export default EditTask;
