import '@carbon/styles/css/styles.css'; // Correct path for Carbon Design System styles
import { Button, Search, Tabs, TabList, Tab, Tile } from '@carbon/react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import TemplatePage from './TemplatePage';

// Add floating animation styles
const floatingAnimation = {
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' }
  }
};

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);

    if (searchQuery.toLowerCase() === "blah") {
      navigate("/popular");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/search?q=${searchQuery}`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error sending search query to backend:", error);
    }
  };

  return (
    <div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '87.5vh',
        backgroundImage: 'url(./src/assets/picnic-group.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          pointerEvents: 'none',
        }}></div>
        <div className="app" style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'transparent',
          color: 'var(--color-black)',
          overflow: 'hidden',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Top Bar */}
          <div style={{
            backgroundColor: 'var(--color-black)',
            color: 'var(--color-light-gray)',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100vw',
            maxWidth: 'none',
            margin: 0,
            boxSizing: 'border-box',
          }}>
            <Link to="/">
              <img src="./src/assets/Aurelytics Logo Light.png" alt="Aurelytics Logo" style={{
                height: '100%',
                maxHeight: '4rem',
                objectFit: 'contain',
              }} />
            </Link>
            <div style={{ marginLeft: 'auto', marginRight: '1rem' }}>
              <Tabs>
                <TabList aria-label="Navigation" style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  gap: '1rem',
                  marginLeft: '0',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: 'auto',
                }}>
                  {/* Tabs removed */}
                </TabList>
              </Tabs>
            </div>
            <Link to="/popular">
              <Button style={{
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-black)',
                fontWeight: 'bold',
                marginLeft: '1rem',
                marginRight: '2rem',
                textAlign: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem 1rem',
              }}>Popular</Button>
            </Link>
          </div>

          {/* Main Content */}
          <main className="main" style={{
            marginTop: '50vh',
          }}>
            {/* Search */}
            <section className="search-section" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '33vh',
              marginTop: '-20vh',
            }}>
              <h1 style={{
                marginBottom: '2rem',
                fontWeight: 'bold',
                fontSize: '3rem',
              }}>Discover Internet Trends</h1>
              <form onSubmit={handleSearch} className="search-form" style={{
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'center',
                gap: '1rem',
                width: '100%',
                maxWidth: '900px',
              }}>
                <Search
                  id="search-bar"
                  labelText="Search for trends..."
                  placeholder="Search for trends..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="lg"
                  className="custom-search"
                />
                <button type="submit" style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-black)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}>Search</button>
              </form>
            </section>
          </main>
        </div>
      </div>

      {/* Trend Cards Section */}
      <section className="trend-grid" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        padding: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'transparent',
      }}>
        {[1, 2, 3].map((index) => (
          <Tile key={index} className="trend-card" style={{
            width: '300px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            flex: '0 0 auto',
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Trend {index}</h3>
            <div style={{
              width: '100%',
              height: '300px',
              backgroundColor: '#f4f4f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span>Image Placeholder</span>
            </div>
          </Tile>
        ))}
      </section>

      {/* Add extra space at the bottom of the webpage to allow scrolling */}
      <div style={{ height: '66.67vh' }}></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<TemplatePage />} />
      </Routes>
    </Router>
  );
}

export default App;