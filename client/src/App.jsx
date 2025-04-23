import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => {
        console.error(err);
        setMessage("Failed to connect to backend.");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Hackathon Hello World 🌎</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;