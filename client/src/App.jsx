import '@carbon/styles/css/styles.css'; // Correct path for Carbon Design System styles
import { Button, Search, Tabs, TabList, Tab } from '@carbon/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '87.5vh', // Scale the picture to leave 1/8 of the screen's size as padding on the bottom
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
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent overlay
        pointerEvents: 'none', // Ensure the overlay does not block interactions
      }}></div>
      <div className="app" style={{
        position: 'relative',
        zIndex: 1, // Ensure content is above the overlay
        backgroundColor: 'transparent', // Keep the app background transparent
        color: 'var(--color-black)',
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top Bar */}
        <div style={{
          backgroundColor: 'var(--color-black)', // Set top bar to solid black color
          color: 'var(--color-light-gray)', // Adjust text color for contrast
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
          <div style={{ marginLeft: 'auto', marginRight: '1rem' }}> {/* Adjusted margin to move tabs slightly left */}
            <Tabs>
              <TabList aria-label="Navigation" style={{
                fontWeight: 'bold',
                display: 'flex',
                gap: '1rem',
                marginLeft: '0', // Removed negative margin to prevent overlap
                alignItems: 'center', // Ensures proper alignment
              }}>
                <Tab style={{ 
                  color: 'var(--color-gold)', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  borderBottom: '2px solid var(--color-gold)', 
                  flex: 'none', 
                  padding: '0.5rem 1rem', 
                  marginLeft: '0' // Ensure no left margin misalignment
                }}>Popular</Tab>
                <Tab style={{ 
                  color: 'var(--color-gold)', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  borderBottom: '2px solid var(--color-gold)', 
                  flex: 'none', 
                  padding: '0.5rem 1rem', 
                  marginLeft: '0' // Ensure no left margin misalignment
                }}>Trending</Tab>
              </TabList>
            </Tabs>
          </div>
        </div>

        {/* Main Content */}
        <main className="main" style={{
          marginTop: '50vh', // Push the main content to the bottom half of the screen
        }}>
          {/* Search */}
          <section className="search-section" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align content to the top
            height: '33vh', // Position the section in the top third of the screen
            marginTop: '-20vh', // Move it further up to align with the top third line
          }}>
            <h1 style={{
              marginBottom: '2rem', // Add more space below the title
            }}>Discover Internet Trends</h1>
            <form onSubmit={handleSearch} className="search-form" style={{
              display: 'flex',
              alignItems: 'stretch', // Ensure both the search bar and button have the same height
              justifyContent: 'center',
              gap: '1rem', // Spacing between the input and button
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
                padding: '1rem 2rem', // Increased padding for a wider button
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
