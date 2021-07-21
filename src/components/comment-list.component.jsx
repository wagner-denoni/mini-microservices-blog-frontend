import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const content =
      comment.status === "pending"
        ? "This comment is awaiting moderation."
        : comment.status === "approved"
        ? comment.content
        : "This comment was rejected.";
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
