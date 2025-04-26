import '@carbon/styles/css/styles.css'; // Correct path for Carbon Design System styles
import { Button, Search, Tabs, TabList, Tab } from '@carbon/react';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);

    try {
      // Send the search query to the backend
      const response = await axios.get(`http://localhost:3000/api/search?q=${searchQuery}`);
      console.log(response.data.message); // Log the backend response
    } catch (error) {
      console.error("Error sending search query to backend:", error);
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '87.5vh',
      backgroundImage: 'url(./src/assets/istockphoto-112156275-612x612.jpg)',
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
          <h2 style={{ margin: 0 }}>Aurelytics</h2>
          <div style={{ marginLeft: 'auto', marginRight: '1rem' }}>
            <Tabs>
              <TabList aria-label="Navigation" style={{
                fontWeight: 'bold',
                display: 'flex',
                gap: '1rem',
                marginLeft: '0',
                alignItems: 'center',
              }}>
                <Tab style={{ 
                  color: 'var(--color-gold)', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  borderBottom: '2px solid var(--color-gold)', 
                  flex: 'none', 
                  padding: '0.5rem 1rem', 
                  marginLeft: '0' 
                }}>Popular</Tab>
                <Tab style={{ 
                  color: 'var(--color-gold)', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  borderBottom: '2px solid var(--color-gold)', 
                  flex: 'none', 
                  padding: '0.5rem 1rem', 
                  marginLeft: '0' 
                }}>Trending</Tab>
              </TabList>
            </Tabs>
          </div>
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

          {/* Trend Cards */}
          <section className="trend-grid" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            minHeight: '33vh',
            marginTop: 'auto',
          }}>
            {/* Cards removed as requested */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
