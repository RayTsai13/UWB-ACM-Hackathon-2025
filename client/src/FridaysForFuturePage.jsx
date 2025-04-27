import React from 'react';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';
import './App.css';

function FridaysForFuturePage() {
  const trend = {
    title: "Fridays for Future",
    description: "Fridays for Future is a youth-led and -organized global climate strike movement that started in August 2018, when 15-year-old Greta Thunberg began a school strike for climate. The movement has since grown into a worldwide phenomenon, with millions of students and activists participating in climate strikes and protests. The movement has significantly influenced climate policy discussions and brought youth voices to the forefront of environmental activism.",
    year: 2018,
    impact: "Mobilized millions of young people worldwide for climate action",
    stats: {
      participants: "14 million+",
      countries: "150+",
      strikes: "7,500+"
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
            <p>Google Trends data visualization would be displayed here</p>
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
            Fridays for Future continues to be a powerful force in global climate activism.
          </p>
          <a 
            href="https://fridaysforfuture.org/" 
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
            Visit Fridays for Future
          </a>
        </section>
      </main>
    </div>
  );
}

export default FridaysForFuturePage; 