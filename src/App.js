import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [health, setHealth] = useState('');

  useEffect(() => {
    fetch('/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching test data:', error));

    fetch('/health')
      .then(response => response.json())
      .then(data => setHealth(data.status))
      .catch(error => console.error('Error fetching health data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TestApp</h1>
        <p>Health Status: {health}</p>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
