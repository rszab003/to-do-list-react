import React from "react";
import Home from "./Home";
import NewTask from "./NewTask";
import EditTask from "./EditTask"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import UserList from "./data/UserList.json";

class App extends React.Component {


  constructor() {
    super();
    
    this.state = {
      currList: UserList
    }

    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks(newList) {
    this.setState({
        currList: newList
      });

    console.log("NEW LIST!!!");
    console.log(this.state.currList)
  }

 

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home UserList={this.state.currList} />} />
          <Route path="/newtask" element={<NewTask updateTasks={this.updateTasks} UserList={this.state.currList} />} />
          <Route path="/edittask" element={ <EditTask  UserList={this.state.currList}/> }/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
