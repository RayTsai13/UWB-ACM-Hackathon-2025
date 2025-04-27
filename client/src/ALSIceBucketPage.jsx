import React from 'react';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';
import './App.css';

function ALSIceBucketPage() {
  const trend = {
    title: "ALS Ice Bucket Challenge",
    description: "The ALS Ice Bucket Challenge was a viral social media campaign that took off in the summer of 2014 to raise awareness and funds for amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig's disease. Participants would dump a bucket of ice water over their heads, share a video of it online, and challenge others to do the same or donate to ALS research—though many chose to do both. The campaign quickly spread worldwide, involving celebrities, athletes, and millions of people, and helped raise over $115 million for the ALS Association, significantly boosting research efforts.",
    year: 2014,
    impact: "Raised over $115 million for ALS research",
    images: [
      "./src/assets/als-challenge-1.jpg",
      "./src/assets/als-challenge-2.jpg",
      "./src/assets/als-challenge-3.jpg"
    ],
    stats: {
      participants: "17 million",
      videos: "2.4 million",
      countries: "159"
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
              src="./src/assets/ALS Ice Bucket Trend.png" 
              alt="ALS Ice Bucket Challenge Google Trends Graph"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          </div>
        </section>

        <section style={{ 
          display: 'flex', 
          gap: '2rem', 
          marginBottom: '2rem', 
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            "./src/assets/ALS 1.jpg.webp",
            "./src/assets/ALS 2.jpg",
            "./src/assets/ALS 3.jpg.webp"
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
            The ALS Ice Bucket Challenge was a viral phenomenon that significantly advanced ALS research.
          </p>
          <a 
            href="https://www.als.org/ice-bucket-challenge" 
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
            Visit ALS Association
          </a>
        </section>
      </main>
    </div>
  );
}

export default ALSIceBucketPage; 