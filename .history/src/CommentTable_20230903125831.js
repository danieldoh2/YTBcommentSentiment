import React from 'react';
import './CommentTable.css'; // Import the CSS file for styling

function CommentTable({ comments }) {
    return (
        <div className="comment-table">
            <h2>Top 15 Comments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Comment</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index) => (
                        <tr key={index}>
                            <td>{comment.text}</td>
                            <td>{comment.author}</td>
                            <td>{comment.date}</td>
                            <td>{comment.likes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CommentTable;

