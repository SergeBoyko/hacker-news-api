import React, { Component } from "react";
import Story from "../components/Story";
import axios from "axios";

class StoryList extends Component {
  state = {
    stories: [
      {
        by: "softdev12",
        descendants: 41,
        id: 9129199,
        kids: [
          9129206,
          9130143,
          9129611,
          9129735,
          9129751,
          9129736,
          9129681,
          9130091,
          9130666,
          9129722,
          9129803
        ],
        score: 133,
        text: "",
        time: 1425249192,
        title: "BIT Poised to Become Publicly Traded Bitcoin Fund",
        type: "story",
        url:
          "http://www.wsj.com/articles/bitcoin-investment-trust-gets-finras-ok-to-become-public-bitcoin-fund-1425242094"
      },
      {
        by: "symisc_devel",
        descendants: 78,
        id: 19389693,
        kids: [
          19399672,
          19399030,
          19397633,
          19397600,
          19397667,
          19398434,
          19399514,
          19397413,
          19393418,
          19399103,
          19400848,
          19399510,
          19401694,
          19398552,
          19399439,
          19397400,
          19391725,
          19395990
        ],
        score: 232,
        time: 1552574975,
        title:
          "Amazon Lobbied More Government Entities Than Any Other US Company Last Year",
        type: "story",
        url:
          "https://www.axios.com/amazon-lobbying-washington-wide-reach-0f7253e4-234e-462a-aca1-ca19705b9c39.html"
      }
    ]
  };

  getFullStories = id => {
    // console.log("getFullStories id", id);
    // axios
    //   .get(
    //     "https://hacker-news.firebaseio.com/v0/item/" +
    //       id +
    //       ".json?print=pretty"
    //   )
    //   .then(response => {
    //     let fullStory = response.data;
    //     const stories = this.state.stories;
    //     stories.push(fullStory);
    //     this.setState({ stories });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  render() {
    const { allIdtories } = this.props;
    const { stories } = this.state;

    /**
       * TODO:
       * remake condition (stories.length === 0) as in Stroy
       * */


    if (stories.length === 0) {
      allIdtories.map(s => {
        console.log("allIdtories", s);
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
