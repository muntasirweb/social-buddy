import React from 'react';
import '../Comment/Comment.css'
const Comment = (props) => {
    const imageUrl = `https://picsum.photos/id/${props.comment.id}/200/300`;
    const {id, name, email, body} = props.comment;
    return (
        <div className="comment-container">
            <div className="img-container">
            <img src={imageUrl} alt=""/>
            </div>
            <div>
    <p className="color"><small>{email}</small></p>
    <p>{body}</p>
            </div>
            
        </div>
    );
};

export default Comment;