import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfRenderer = ({ uploadedFile }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (event) => {
    event.preventDefault();
    const { comment, parentId } = event.target.elements;
    const newComment = {
      id: Date.now(),
      content: comment.value,
      parentId: parentId.value ? parseInt(parentId.value) : null,
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
    event.target.reset();
  };

  const renderComments = (comments) => {
    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.content}
            {comment.replies.length > 0 && renderComments(comment.replies)}
            <form onSubmit={handleAddComment}>
              <input type="text" name="comment" placeholder="Add a reply" />
              <input
                type="hidden"
                name="parentId"
                value={comment.id}
              />
              <button type="submit">Reply</button>
            </form>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="pdf-renderer">
      <div className="pdf-viewer">
       {uploadedFile && (
          <Document file={uploadedFile}>
            <Page pageNumber={1} />
          </Document>
        )}
      </div>
      <div className="comments-pane">
        <h3>Comments</h3>
        {renderComments(comments)}
        <form onSubmit={handleAddComment}>
          <input type="text" name="comment" placeholder="Add a comment" />
          <input type="hidden" name="parentId" value="" />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
};

export default PdfRenderer;
