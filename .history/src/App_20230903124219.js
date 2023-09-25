import React from 'react';
import './App.css';
import InputForm from './InputForm'; // Import the InputForm component here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Sentiment Analysis</h1>
      </header>
      <main>
        <div className="container">
          <InputForm /> {/* Render the InputForm component */}
          {/* You can render the SentimentAnalysis component here */}
        </div>
      </main>
      <footer>
        {/* You can render the Footer component here */}
      </footer>
    </div>
  );
}

export default App;
