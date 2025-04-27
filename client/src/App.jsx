import '@carbon/styles/css/styles.css'; // Correct path for Carbon Design System styles
import { Button, Search, Tabs, TabList, Tab, Tile } from '@carbon/react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import TemplatePage from './TemplatePage';
import ALSIceBucketPage from './ALSIceBucketPage';
import BlackoutTuesdayPage from './BlackoutTuesdayPage';
import StopAsianHatePage from './StopAsianHatePage';
import MeTooPage from './MeTooPage';
import FridaysForFuturePage from './FridaysForFuturePage';
import BlackLivesMatterPage from './BlackLivesMatterPage';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const trends = [
    {
      title: "ALS Ice Bucket Challenge",
      path: "/als-ice-bucket",
      image: "./src/assets/ALS 3.jpg.webp"
    },
    {
      title: "#BlackoutTuesday",
      path: "/blackout-tuesday",
      image: "./src/assets/Blackout Tuesday 3.webp"
    },
    {
      title: "#StopAsianHate",
      path: "/stop-asian-hate",
      image: "./src/assets/Stop Asian Hate 2.jpg"
    },
    {
      title: "#MeToo Movement",
      path: "/metoo",
      image: ""
    },
    {
      title: "Fridays for Future",
      path: "/fridays-for-future",
      image: ""
    },
    {
      title: "Black Lives Matter",
      path: "/black-lives-matter",
      image: ""
    }
  ];

  // Filtered trends for display cards (only show the original three)
  const displayTrends = trends.slice(0, 3);

  const filteredTrends = trends.filter(trend => 
    trend.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleTrendClick = (path) => {
    navigate(path);
    setShowDropdown(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          pointerEvents: 'none',
        }}></div>
        <div className="app" style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'transparent',
          color: 'var(--color-black)',
          overflow: 'hidden',
          height: '100%',
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
              <div className="search-container" style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
              }}>
                <Search
                  id="search-bar"
                  labelText="Search for trends..."
                  placeholder="Search for trends..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filteredTrends.length > 0) {
                      handleTrendClick(filteredTrends[0].path);
                    }
                  }}
                  size="lg"
                  className="custom-search"
                />
                {showDropdown && searchQuery && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    maxWidth: '900px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    marginTop: '0.5rem',
                  }}>
                    {filteredTrends.map((trend, index) => (
                      <div
                        key={index}
                        onClick={() => handleTrendClick(trend.path)}
                        style={{
                          padding: '1rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          borderBottom: index < filteredTrends.length - 1 ? '1px solid #e0e0e0' : 'none',
                        }}
                      >
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={trend.image}
                            alt={trend.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <span style={{ color: 'var(--color-black)' }}>{trend.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
        {displayTrends.map((trend, index) => (
          <Link key={index} to={trend.path} style={{ textDecoration: 'none', color: 'var(--color-black)' }}>
            <Tile className="trend-card" style={{
              width: '300px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              flex: '0 0 auto',
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-black)' }}>{trend.title}</h3>
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f4f4f4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '4px'
              }}>
                <img 
                  src={trend.image}
                  alt={trend.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </Tile>
          </Link>
        ))}
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<TemplatePage />} />
        <Route path="/als-ice-bucket" element={<ALSIceBucketPage />} />
        <Route path="/blackout-tuesday" element={<BlackoutTuesdayPage />} />
        <Route path="/stop-asian-hate" element={<StopAsianHatePage />} />
        <Route path="/metoo" element={<MeTooPage />} />
        <Route path="/fridays-for-future" element={<FridaysForFuturePage />} />
        <Route path="/black-lives-matter" element={<BlackLivesMatterPage />} />
      </Routes>
    </Router>
  );
}

export default App;