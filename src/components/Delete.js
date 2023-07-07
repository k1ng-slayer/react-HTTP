import React, { Component } from "react";
import axios from "axios";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deleteHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .delete("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID } = this.state;

    return (
      <>
        <form onSubmit={this.deleteHandler}>
          <div>
            <label>Enter ID:</label>
            <input
              type="number"
              name="userID"
              value={userID}
              onChange={this.changeHandler}
              style={{ margin: "10px" }}
            ></input>
          </div>
          <button type="submit">Delete</button>
        </form>
      </>
    );
  }
}

export default Delete;
