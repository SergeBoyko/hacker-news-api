import React, { Component } from "react";
import axios from "axios";
import { getDateFormatUnixTime } from "../common/getDateFormatUnixTime";
import { sortByDate } from "../common/sortByDate";
import { setDateToPattern } from "../common/setDateToPattern";
import { htmlDecode } from "../common/htmlDecode";
import Comments from "./Comments";


class Story extends Component {
  state = {
    comments: []
  };

  getFullComments = (id, storyId) => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
        id +
        ".json?print=pretty"
      )
      .then(response => {
        let fullStory = response.data;
        const { comments } = this.state;
        if (!fullStory.deleted && !fullStory.dead && fullStory.type === 'comment') {
          let fullNewStory = fullStory;
          fullNewStory.storyId = storyId
          comments.push(fullNewStory); // add to state only active comments (neither dead, nor deleted)
        }
      })
      .then(() => {
        const { comments } = this.state;
        console.log('comments state', comments)

        /// get Data format Unix Time
        getDateFormatUnixTime(comments);
        console.log('comments getDateFormatUnixTime', comments)
        ////// Sort Order by Date
        sortByDate(comments);

        ////// Format Date to pattern
        setDateToPattern(comments);

        //// Decode html from text
        htmlDecode(comments)

        const limitByTwoComments = () => {
          const twoComments = comments.slice(0, 2);
          this.setState({ comments: twoComments })
        }
        limitByTwoComments()

      })

      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { stories } = this.props;

    const { comments } = this.state;
    if (comments.length === 0) {
      stories.map(s => {
        let getAllKids = () => {
          const storyId = s.id
          stories.map(k => {
            const kids = k.kids;
            const allKids = kids.length; // all id of comments
            for (let i = 0; i < allKids; i++) {
              this.getFullComments(kids[i], storyId);
            }
            return kids
          });
        };
        return getAllKids();
      });
    }

    return stories.map(story => (
      <div className="card" key={story.id}>
        <div className="card-header">Strory by {story.by}</div>
        <div className="card-body">
          <h5 className="card-title">{story.title}</h5>
          <p>
            {" "}
            <a href={story.url} className="btn btn-primary">
              Read story
            </a>
          </p>
          <Comments comments={comments} storyById={story.id} />
        </div>
      </div>
    ));
  }
}

export default Story;
