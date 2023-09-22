import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css"; // Import the CSS file
import { FaTrash, FaPencilAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useBlogs } from "../../context/BlogsContext";

const Blogs = () => {
  const { blogs, postComment, comments, setComments, fetchCommentsByBlogId,  deleteComment, patchComment } = useBlogs();

  // State for managing likes
  const [likes, setLikes] = useState({});
  
  // State to track the visibility of the comment section for each blog
  const [commentSectionVisibility, setCommentSectionVisibility] = useState({});
  
  // State to track the comment being edited
  const [editingComment, setEditingComment] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState(""); 

  // Function to add a new comment
  const addComment = (emailAddress, liked, blogId, commentText) => {
    postComment(emailAddress, liked, blogId, commentText);
  };

  // Function to handle liking a comment
  const handleLike = (commentId) => {
    // Toggle like status for the given comment
    const newLikes = { ...likes };
    newLikes[commentId] = !newLikes[commentId];
    setLikes(newLikes);
  };
  // Function to delete a comment
  const editComment = (commentId, newText) => {
    const updatedData = {
      content: newText,
    };
  
    patchComment(commentId, updatedData);
  };
  // Function to delete a comment
  const removeComment = (commentId) => {
    deleteComment(commentId);
  };;

  // Function to toggle the comment section visibility for a specific blog
  const toggleCommentSection = (blogId) => {
    setCommentSectionVisibility((prevVisibility) => ({
      ...prevVisibility,
      [blogId]: !prevVisibility[blogId],
    }));
  };

  // Function to set the comment being edited
  const startEditComment = (commentId) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setEditingComment(commentId);
      setEditedCommentText(commentToEdit.content); // Update with the comment content
    }
  };

  // Function to save the edited comment
  const saveEditedComment = (commentId, newText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: newText }; // Update the content field
      }
      return comment;
    });

    setComments(updatedComments);
    setEditingComment(null);
    setEditedCommentText("");
  };

  // Use useEffect to fetch comments only when blogs change or when posting a new comment
  useEffect(() => {
    blogs.forEach((blog) => {
      // Fetch comments only if the comment section is visible for this blog
      if (commentSectionVisibility[blog.id]) {
        fetchCommentsByBlogId(blog.id);
      }
    });
  }, [blogs, fetchCommentsByBlogId, commentSectionVisibility]);

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <Link to={blog.link} target="_blank">
            Read More
          </Link>

          {/* Comment section */}
          <div className="comment-section">
            
            
            {/* Button to toggle comment section */}
            <button
              onClick={() => toggleCommentSection(blog.id)}
              className="comment-toggle-button"
            >
              {commentSectionVisibility[blog.id] ? "Hide Comments" : "Comments"}
            </button>
            
            {/* Show comments only if the comment section is visible */}
            {commentSectionVisibility[blog.id] && (
              
              <ul>
                {comments
                  .filter((comment) => comment.blog_id === blog.id) // Use 'blog_id' to filter comments
                  .map((comment) => (
                    <li key={comment.id} className="comment">
                      <div className="comment-content">
                      
                        {editingComment === comment.id ? (
                          <>
                            <textarea
                              value={editedCommentText}
                              onChange={(e) =>
                                setEditedCommentText(e.target.value)
                              }
                            />
                            <button
                              onClick={() =>{
                                saveEditedComment(comment.id, editedCommentText);
                                editComment(comment.id, editedCommentText);
                              }
                              }
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <p>{comment.content}</p>
                        )}
                        <span className="like-count">
                          {likes[comment.id] || <FaThumbsUp />}
                        </span>
                      </div>
                      <div className="comment-buttons">
                        <button onClick={() => removeComment(comment.id)}>
                          <FaTrash />
                        </button>
                        <button onClick={() => handleLike(comment.id)}>
                          {likes[comment.id] ? <FaThumbsUp /> : <FaThumbsDown />}
                        </button>
                        <button onClick={() => startEditComment(comment.id)}>
                          <FaPencilAlt />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
            
            {/* Add a Comment form */}
            {commentSectionVisibility[blog.id] && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const commentText = e.target.commentText.value;
                  const emailAddress = e.target.emailAddress.value;
                  const liked = true; // Adjust this based on your logic
                  addComment(emailAddress, liked, blog.id, commentText); // Pass the liked status
                  e.target.commentText.value = ""; // Clear the input field
                }}
              >
                <input
                  type="text"
                  name="emailAddress"
                  placeholder="Email Address"
                  className="comment-input"
                />
                <input
                  type="text"
                  name="commentText"
                  placeholder="Add a comment"
                  className="comment-input"
                />
                <button type="submit" className="comment-button">
                  Add Comment
                </button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
