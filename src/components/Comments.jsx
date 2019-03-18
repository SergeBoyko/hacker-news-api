import React from "react";

const Comments = ({ comments, storyById }) => {
  return (
    <div>
      <h6>Comments</h6>
      {comments.map(c =>
        (c.storyId === storyById) ? (
          <div key={c.id || c.text} className="card-text">
            <hr />
            <span style={{ fontWeight: "bold", color: "#333" }}>
              {c.by}
            </span>{" "}
            <span style={{ fontWeight: "bold", color: "#666" }}>{c.time}</span>{" "}
            {c.text}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Comments;
