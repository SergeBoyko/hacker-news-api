import React, { Component } from 'react';

class Comments extends Component {
  state = {
    comments: this.props.comments
  }

  render() {
    const { storyById } = this.props
    const { comments } = this.state

    let showComments = comments.filter(q => (q.parent === storyById))

    showComments = showComments.slice(0, 2).map(c =>
      (
        <div key={c.id || c.text} className="card-text">
          <hr />
          <span style={{ fontWeight: "bold", color: "#333" }}>
            {c.by}
          </span>{" "}
          <span style={{ fontWeight: "bold", color: "#666" }}>{c.time}</span>{" "}
          {c.text}
        </div>
      )
    )

    return (
      <div>
        <h6>Comments</h6>
        {showComments}
      </div>
    );
  }
}

export default Comments;


