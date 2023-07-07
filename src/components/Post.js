// HTTP POST Request

import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
      title: "",
      body: "",
    };
  }

  //accept an event 'e' as its argument
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // key-value pair
  };

  //accept an event 'e' as its argument
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((respose) => {
        console.log(respose);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID, title, body } = this.state;

    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="number"
              name="userID"
              value={userID}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Post;
