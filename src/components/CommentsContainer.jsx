import React from "react";
import CommentsList from './CommentsList';

// Sample comments data
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
    <div className="m-5 p-2 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <CommentsList list={CommentsData} />
    </div>
  )
};

export default CommentsContainer;
