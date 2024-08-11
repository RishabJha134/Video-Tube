import React from "react";
import CommentsList from './CommentsList';

// each object each individual comment.
const CommentsData = [
  {
    name: "Akshay Saini",
    text: "Great Post sir ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Great Post sir ",
    replies: [
      {
        name: "Deepak Singh",
        text: "I agree with you",
        replies: [
          {
            name: "Nikhil Pandey",
            text: "I also agree with you",

            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Great Post sir ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Great Post sir ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Great Post sir ",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList list={CommentsData}></CommentsList>
    </div>
  )
};

export default CommentsContainer;
