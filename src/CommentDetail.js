import React from 'react'

const CommentDetail = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img src={props.logo} alt="logo" />
        </a>

        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>

          <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div> 
        </div>
       
        <div className="text">{props.comment}</div>

      </div>
  )
}

export default CommentDetail
