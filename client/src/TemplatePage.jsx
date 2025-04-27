import { Link, useLocation } from 'react-router-dom';
import './App.css';

function TemplatePage() {
  const location = useLocation();
  const data = location.state?.data || {
    title: 'No Data',
    explanation: 'No explanation available.',
    googleTrendsImage: './src/assets/picnic-group.webp',
    sampleImages: [
      './src/assets/Aurelytics Logo Light.png',
      './src/assets/Aurelytics Logo Dark.png',
      './src/assets/react.svg',
      './src/assets/istockphoto-112156275-612x612.jpg',
    ],
    organizationLink: '#',
    sampleLinks: ['#', '#'],
  };

  return (
    <div style={{
      minHeight: '133vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundImage: `url(${data.googleTrendsImage})`,
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
        maxWidth: '1600px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}>
        <section style={{ marginBottom: '2rem', width: '100%' }}>
          <h1 style={{ color: 'var(--color-dark-purple)', fontWeight: 'bold' }}>{data.title}</h1>
          <p>{data.explanation}</p>
        </section>

        <section style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', width: '100%' }}>
          {data.sampleImages.map((image, index) => (
            <div key={index} style={{ flex: 1, textAlign: 'center' }}>
              <img src={image} alt={`Sample ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--color-gold)', borderRadius: '8px', width: '100%' }}>
          <h3 style={{ color: 'white' }}>How you could Help!</h3>
          <a href={data.organizationLink} target="_blank" rel="noopener noreferrer">Visit Organization</a>
        </section>

        <section style={{ padding: '1rem', backgroundColor: 'var(--color-light-blue)', borderRadius: '8px', width: '100%' }}>
          <h3>Sample links</h3>
          <ul>
            {data.sampleLinks.map((link, index) => (
              <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">Link {index + 1}</a></li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default TemplatePage;