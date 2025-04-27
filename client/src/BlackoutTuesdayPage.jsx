import React from 'react';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';
import './App.css';

function BlackoutTuesdayPage() {
  const trend = {
    title: "#BlackoutTuesday",
    description: "A social media movement that took place on June 2, 2020, in response to the murder of George Floyd and other instances of police brutality. Millions of people posted black squares on their social media feeds to show solidarity with the Black Lives Matter movement and to protest against racial injustice. The movement aimed to raise awareness about systemic racism and police violence while encouraging people to take action and educate themselves about racial inequality.",
    year: 2020,
    impact: "Reached over 28 million posts on Instagram alone, becoming one of the most widespread social media movements in history",
    stats: {
      posts: "28 million",
      hashtags: "#BlackoutTuesday, #TheShowMustBePaused",
      platforms: "Instagram, Twitter, Facebook"
    }
  };

  return (
    <div style={{
      minHeight: '133vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundImage: 'url(./src/assets/picnic-group.webp)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <header style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-light-gray)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 2,
      }}>
        <Link to="/">
          <img src="./src/assets/Aurelytics Logo Light.png" alt="Aurelytics Logo" style={{
            height: '100%',
            maxHeight: '4rem',
            objectFit: 'contain',
          }} />
        </Link>
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2rem',
        backgroundColor: 'var(--color-light-gray)',
        margin: '0 auto',
        maxWidth: '2000px',
        width: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        position: 'relative',
        zIndex: 1,
      }}>
        <section style={{ marginBottom: '2rem', width: '100%' }}>
          <h1 style={{ color: 'var(--color-dark-purple)', fontWeight: 'bold' }}>{trend.title}</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{trend.description}</p>
          <p style={{ marginTop: '1rem' }}><strong>Year:</strong> {trend.year}</p>
          <p><strong>Impact:</strong> {trend.impact}</p>
        </section>

        {/* Google Trends Graph Section */}
        <section style={{ 
          width: '100%',
          marginBottom: '2rem',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          maxHeight: '400px',
          overflow: 'hidden'
        }}>
          <h2 style={{ 
            color: 'var(--color-dark-purple)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Google Trends Analysis</h2>
          <div style={{
            width: '100%',
            margin: '0 auto',
            textAlign: 'center',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="./src/assets/Blackout Tuesday Trend.png" 
              alt="Blackout Tuesday Google Trends Graph"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          </div>
        </section>

        {/* Sample Photos Section */}
        <section style={{ 
          width: '100%',
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            color: 'var(--color-dark-purple)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Sample Photos</h2>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <div style={{
              flex: '1',
              height: '300px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="./src/assets/Blackout Tuesday 1.webp" 
                alt="Blackout Tuesday Sample 1"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              flex: '1',
              height: '300px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="./src/assets/Blackout Tuesday 2.jpg" 
                alt="Blackout Tuesday Sample 2"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              flex: '1',
              height: '300px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="./src/assets/Blackout Tuesday 3.webp" 
                alt="Blackout Tuesday Sample 3"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ 
          width: '100%',
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: 'var(--color-gold)',
          borderRadius: '8px',
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Statistics</h2>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {Object.entries(trend.stats).map(([key, value]) => (
              <Tile key={key} style={{ 
                padding: '1rem',
                backgroundColor: 'white',
                flex: '1 1 200px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--color-dark-purple)' }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
              </Tile>
            ))}
          </div>
        </section>

        <section style={{ 
          padding: '1rem', 
          backgroundColor: 'var(--color-light-blue)', 
          borderRadius: '8px', 
          width: '100%',
          textAlign: 'center'
        }}>
          <h2>Learn More</h2>
          <p style={{ marginBottom: '1rem' }}>
            The #BlackoutTuesday movement was a powerful demonstration of digital activism and solidarity.
          </p>
          <a 
            href="https://blacklivesmatter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--color-gold)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Visit Black Lives Matter
          </a>
        </section>
      </main>
    </div>
  );
}

export default BlackoutTuesdayPage; 