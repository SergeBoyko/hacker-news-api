import React, { Component } from "react";
import Story from "../components/Story";
import axios from "axios";

class StoryList extends Component {
  state = {
    stories: [],
    allStories: ""
  };

  getFullStories = (id, storiesLenght, loopStory) => {
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
        if (storiesLenght === loopStory) {
          this.setState({ stories, allStories: storiesLenght });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { allIdtories } = this.props;
    const { stories, allStories } = this.state;
    const storiesLenght = allIdtories.length;

    if (allStories.length === 0) {
      allIdtories.map((s, index) => {
        let loopStory = index + 1;
        return this.getFullStories(s, storiesLenght, loopStory);
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
