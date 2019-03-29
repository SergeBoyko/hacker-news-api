import React, { Component } from "react";
import axios from "axios";
import { getDateFormatUnixTime } from "../common/getDateFormatUnixTime";
import { sortByDate } from "../common/sortByDate";
import { setDateToPattern } from "../common/setDateToPattern";
import { htmlDecode } from "../common/htmlDecode";
import Comments from "./Comments";
import Spinner from "../components/Spinner/Spinner"

class Story extends Component {
  state = {
    comments: [],
    loading: true,
    allStories: ""
  };

  /**
   * TODO:
   * check getDateFormat with plagin Moment.js
   */
  getFullComments = (id, storiesLenght, loopStory) => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
        id +
        ".json?print=pretty"
      )
      .then(response => {
        let fullStory = response.data;
        const { comments } = this.state;
        if (
          !fullStory.deleted &&
          !fullStory.dead &&
          fullStory.type === "comment"
        ) {
          comments.push(fullStory); // add to state only active comments (neither dead, nor deleted)
        }
      })
      .then(() => {
        const { comments } = this.state;
        /// get Data format Unix Time
        getDateFormatUnixTime(comments);
        ////// Sort Order by Date
        sortByDate(comments);
        ////// Format Date to pattern
        //   setDateToPattern(comments);
        //// Decode html from text
        htmlDecode(comments);

        if (storiesLenght === loopStory) {
          this.setState({ comments, allStories: storiesLenght, loading: false });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { stories } = this.props;

    const { comments, allStories } = this.state;
    const storiesLenght = stories.length;

    if (allStories.length === 0) {
      stories.map((s, index) => {
        let loopStory = index + 1;
        //   console.log("stories.map", s);
        let getAllKids = () => {
          // console.log("getAllKids");
          const kids = s.kids;
          const allKids = kids.length; // all id of comments
          for (let i = 0; i < allKids; i++) {
            this.getFullComments(kids[i], storiesLenght, loopStory);
          }
        };
        return getAllKids();
      });
    }

    let stories = <Spinner />
    if (loading){
      
    }

    return stories.map(story => (
      <div className="card mt-4" key={story.id}>
    
        <div className="card-header">Story by {story.by}</div>
        <div className="card-body">
          <h5 className="card-title">{story.title}</h5>
          <p>
            {" "}
            <a href={story.url} className="btn btn-primary">
              Read story
            </a>
            <span style={{ marginLeft: "25px" }}>
              Published{" "}
              <span style={{ fontWeight: "bold", color: "#888" }}>
                {story.time}
              </span>
            </span>
          </p>
          <Comments comments={comments} storyById={story.id} />
        </div>
      </div>
    ));
  }
}

export default Story;
