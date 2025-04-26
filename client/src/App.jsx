import '@carbon/styles/css/styles.css'; // Correct path for Carbon Design System styles
import { Button, Search } from '@carbon/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="app">
      {/* Top Bar */}
      <header className="top-bar">
        <h2>TrendTracker</h2>
        <nav>
          <Button>Popular</Button>
          <Button>Trending</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Search */}
        <section className="search-section">
          <h1>Discover Internet Trends</h1>
          <form onSubmit={handleSearch} className="search-form">
            <Search
              id="search-bar"
              labelText="Search for trends..."
              placeholder="Search for trends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg" // Matches the current size
            />
            <button type="submit">Search</button>
          </form>
        </section>

        {/* Trend Cards */}
        <section className="trend-grid">
          {[1, 2, 3].map((index) => (
            <div className="trend-card" key={index}>
              <h3>Trend Title {index}</h3>
              <p>Short description of the trend...</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
