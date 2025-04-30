import React, { useState } from "react";
import "./NestedComments.styles.css";
import { useData } from "./useData";

function Comment({ comment, handleSubmit, handleEdit, handleDelete }: any) {
  const [replyText, setReplyText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReply = () => {
    handleSubmit(comment.id, replyText);
    setReplyText("");
    setShowReplyInput(false);
  };

  const handleEditSubmit = () => {
    handleEdit(comment.id, editText);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditText(comment.text);
    setEditMode(false);
  };

  const handleDeleteSubmit = () => {
    handleDelete(comment.id);
  };

  return (
    <div>
      <div className="comment">
        {editMode ? (
          <div className="input-container">
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </div>
        ) : (
          <p>{comment.text}</p>
        )}
        <div className="actions">
          {editMode ? (
            <>
              <button onClick={handleEditSubmit}>save</button>
              <button onClick={handleCancelEdit}>cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setShowReplyInput(!showReplyInput)}>
                reply
              </button>
              <button onClick={() => setEditMode(!editMode)}>edit</button>
              <button onClick={handleDeleteSubmit}>delete</button>
            </>
          )}
        </div>
      </div>
      <div className="replies-container">
        {showReplyInput ? (
          <div className="input-container">
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={handleReply}>submit</button>
          </div>
        ) : null}
        {comment.replies.map((item) => (
          <Comment
            comment={item}
            key={item.id}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export function NestedComments() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { handleInsertNode, handleEditNode, handleDeleteNode } = useData();

  const handleSubmit = (id, text) => {
    const data = handleInsertNode([...comments], id, text);
    setComments(data);
    setCommentText("");
  };

  const addTopLevelComment = () => {
    const data = handleInsertNode([...comments], null, commentText);
    setComments(data);
    setCommentText("");
  };

  const handleEdit = (id, text) => {
    const data = handleEditNode([...comments], id, text);
    setComments(data);
  };

  const handleDelete = (id) => {
    const data = handleDeleteNode([...comments], id);
    setComments(data);
  };

  return (
    <div className="comments-app">
      <div className="input-container">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addTopLevelComment}>submit</button>
      </div>

      <div className={`comments-list`}>
        {comments.map((item: any) => (
          <Comment
            key={item.id}
            comment={item}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
