import React from 'react';
import './App.css';
import InputForm from './InputForm';
import CommentTable from './CommentTable'; // Import the CommentTable component

function App() {
  // Assume you have fetched the comments and stored them in a 'comments' array
  // const comments = /* Fetch comments from your backend */;

  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Sentiment Analysis</h1>
      </header>
      <main>
        <div className="container">
          <InputForm />
          {/* <CommentTable comments={comments} /> Render the CommentTable component */}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
