import React, { useState } from 'react';
import './InputForm.css'; // Import the CSS file for styling

function InputForm() {
    const [youtubeUrl, setYoutubeUrl] = useState('');

    const handleUrlChange = (e) => {
        setYoutubeUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the logic to send the YouTube URL to your backend for sentiment analysis
        console.log('YouTube URL submitted:', youtubeUrl);
    };

    return (
        <div className="input-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter YouTube URL"
                    value={youtubeUrl}
                    onChange={handleUrlChange}
                />
                <button type="submit">Analyze Sentiment</button>
            </form>
        </div>
    );
}

export default InputForm;
