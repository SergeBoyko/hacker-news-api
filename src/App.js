import React, { Component } from "react";
import StoryList from "./container/StoryList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    allIdtories: []
  };

  getAllStories = () => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => {
        const tenStories = response.data.slice(0, 5); /// Number story is here
        this.setState({ allIdtories: tenStories });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async componentDidMount() {
    await this.getAllStories();
  }

  render() {
    const { allIdtories } = this.state;
    return (
      <div className="App" data-test='App'>
        <StoryList allIdtories={allIdtories} />
      </div>
    );
  }
}

export default App;
