import React from "react";
import Comment from "./Comment";

const CommentsList = ({ list }) => {
    // (list);
    
  return (
    <>
      <div>
        {list.map((item, index) => (
        <div>
<Comment key={index} data={item}></Comment>
{/* // replies:- */}
{/* using recursion */}
<div className="pl-5 ml-8 border border-l-black">
<CommentsList  list={item.replies && item.replies}></CommentsList>
</div>
        </div>

          
         
        ))}
      </div>
    </>
  );
};

export default CommentsList;
