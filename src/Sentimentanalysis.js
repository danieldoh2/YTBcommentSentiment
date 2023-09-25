import React from 'react';
import './SentimentAnalysis.css'; // Import CSS for styling

function SentimentAnalysis({ sentimentData }) {
  return (
    <div className="sentiment-analysis">
      <h2>Sentiment Analysis Results</h2>
      <p>Overall Sentiment: {sentimentData.overallSentiment}</p>
      <p>Positive Sentiment: {sentimentData.positiveSentiment}</p>
      <p>Negative Sentiment: {sentimentData.negativeSentiment}</p>
    </div>
  );
}

export default SentimentAnalysis;
