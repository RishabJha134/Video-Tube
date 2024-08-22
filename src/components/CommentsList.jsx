import React from "react";
import Comment from "./Comment";

const CommentsList = ({ list }) => {
  return (
    <div className="space-y-4">
      {list.map((item, index) => (
        <div key={index}>
          <Comment data={item} />
          {item.replies.length > 0 && (
            <div className="pl-4 ml-4 border-l border-gray-700 dark:border-gray-600">
              <CommentsList list={item.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
