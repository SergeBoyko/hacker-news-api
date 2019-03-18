import React, { Component } from "react";
import StoryList from "./container/StoryList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    allIdtories: [19388049]
  };

  // getAllStories = () => {
  //   axios
  //     .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  //     .then(response => {
  //       const tenStories = response.data.slice(0, 10);  ////  Here is limit by 10 story
  //       this.setState({ allIdtories: tenStories });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  // componentDidMount() {
  //   this.getAllStories();
  // }

  render() {
    const { allIdtories } = this.state;
    return (
      <div className="App">
        <StoryList allIdtories={allIdtories} />
      </div>
    );
  }
}

export default App;
