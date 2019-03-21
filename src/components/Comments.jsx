import React from "react";

/** 
 * TODO:
 * convert to class
 * add state
 * in state shoulb separate array commits by parent id
 * make loop forEach and slice(0,2)
 * add setState
 * showing code will more easy, less condition
 * 
 * */


const Comments = ({ comments, storyById }) => {


  return (
    <div>
      <h6>Comments {comments.length}</h6>
      {comments.map(c =>
        (c.parent === storyById) ? (

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
