import React from 'react';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';
import './App.css';

function StopAsianHatePage() {
  const trend = {
    title: "#StopAsianHate",
    description: "A movement that gained momentum in 2021 following a surge in anti-Asian hate crimes during the COVID-19 pandemic. The hashtag was used to raise awareness, share stories, and organize protests against racism and violence targeting Asian communities.",
    year: "2021",
    impact: "The movement led to increased awareness of anti-Asian racism, legislative changes, and community support initiatives. It also sparked important conversations about racial justice and solidarity.",
    stats: {
      posts: "Over 1.2 million",
      engagement: "Significant media coverage and celebrity involvement",
      duration: "Ongoing movement with periodic spikes in activity"
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
              src="./src/assets/StopAsianHate Trends.png" 
              alt="Stop Asian Hate Google Trends Graph"
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
          display: 'flex', 
          gap: '2rem', 
          marginBottom: '2rem', 
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            "./src/assets/Stop Asian Hate 1.webp",
            "./src/assets/Stop Asian Hate 2.jpg",
            "./src/assets/Stop Asian Hate 3.jpg"
          ].map((image, index) => (
            <div key={index} style={{ 
              flex: '1 1 500px',
              maxWidth: '600px',
              textAlign: 'center',
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img 
                src={image} 
                alt={`${trend.title} - Image ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  objectFit: 'cover'
                }} 
              />
            </div>
          ))}
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
            The #StopAsianHate movement continues to raise awareness and fight against anti-Asian racism.
          </p>
          <a 
            href="https://stopaapihate.org" 
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
            Visit Stop AAPI Hate
          </a>
        </section>
      </main>
    </div>
  );
}

export default StopAsianHatePage; 