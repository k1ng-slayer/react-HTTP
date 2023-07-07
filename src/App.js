import React, { Component } from "react";
import "./App.css";
import Get from "./components/Get";
import Post from "./components/Post";
import Delete from "./components/Delete";
import Update from "./components/Update";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Get /> */}
        {/* <Post /> */}
        <Delete />
        {/* <Update /> */}
      </div>
    );
  }
}

export default App;
