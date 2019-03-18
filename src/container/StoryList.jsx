import React, { Component } from "react";
import Story from "../components/Story";
import axios from "axios";

class StoryList extends Component {
  state = {
    stories: []
  };

  getFullStories = id => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
        id +
        ".json?print=pretty"
      )
      .then(response => {
        let fullStory = response.data;
        const stories = this.state.stories;
        stories.push(fullStory);
        this.setState({ stories });
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { allIdtories } = this.props;
    const { stories } = this.state;
    if (stories.length === 0) {
      allIdtories.map(s => {
        return this.getFullStories(s);
      });
    }

    return (
      <main className="container">
        <div className="row">
          <div className="col-12">
            <h1>Hacker News</h1>
            <Story stories={stories} />
          </div>
        </div>
      </main>
    );
  }
}

export default StoryList;
