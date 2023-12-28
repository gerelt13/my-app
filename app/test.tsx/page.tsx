import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Video Section */}
      <video width="100%" controls>
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Progress Bar Section */}
      <div className="Value-sc-1hmc5o5 gZqhSy" style={{ width: '0%' }}></div>
    </div>
  );
}

export default App;