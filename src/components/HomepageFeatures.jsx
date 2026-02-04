/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './HomepageFeatures.module.css';
import stats from '../../static/data/aggregated_data.json';

export default function HomepageFeatures() {
  return (
    <>
      <section
        className={styles.features}
        style={{ backgroundImage: 'linear-gradient(135deg, #dffbff, #caf2ff)' }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align items to the left
            textAlign: 'left', // Align text to the left
            width: '70%',
          }}
        >
          <div className="col" style={{ marginBottom: '1rem' }}>
            <h1
              style={{
                fontWeight: 'bold',
                fontSize: '1.875rem',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Streamlining FAIR data sharing
            </h1>
          </div>
          <div
            className="col"
            style={{
              display: 'flex', // Use flexbox for horizontal alignment

              gap: '1rem', // Add spacing between the list and the image
            }}
          >
            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                marginBottom: '1rem',
                textAlign: 'left',
                marginLeft: '1.25rem',
              }}
            >
              SODA is a cross-platform desktop software that helps researchers prepare and share
              FAIR peripheral nervous system (PNS) related data and models using the SPARC Data
              Structure (SDS) and the SPARC Portal. Since 2021, SODA has been installed on over{' '}
              {Math.round(stats['Number of total users'] / 100) * 100} computers, empowering
              researchers worldwide.
            </p>
          </div>
        </div>
      </section>
      {/* New Statistics Section */}

      <section>
        <div
          style={{
            position: 'relative', // Enable positioning for the child div
            padding: '2rem 2rem',
            textAlign: 'center',
            width: '78%',
            margin: '2rem auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            height: 'auto',
          }}
        >
          <div className="container">
            <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>SODA&apos;s Impact</h1>

            <div className="row">
              <div className="border col col--3">
                <h2 style={{ color: '#00a1e4', fontSize: '1.7rem', marginBottom: '.2rem' }}>
                  {(stats['Amount (GB) of data files processed'] / 1000).toFixed(0)} TB+ Data
                </h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Curated and shared</p>
              </div>
              <div className="border col col--3">
                <h2 style={{ color: '#00a1e4', fontSize: '1.7rem', marginBottom: '.2rem' }}>
                  {stats['Number of files processed'] < 1_000_000
                    ? `${Math.floor(stats['Number of files processed'] / 1000)}K`
                    : stats['Number of files processed']}{' '}
                  Files
                </h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Curated and shared</p>
              </div>
              <div className="border col col--3">
                <h2 style={{ color: '#00a1e4', fontSize: '1.7rem', marginBottom: '.2rem' }}>
                  {stats['Number of published datasets touched']} Datasets
                </h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>
                  Published to the Sparc Portal
                </p>
              </div>
              <div className="border col col--3">
                <h2 style={{ color: '#00a1e4', fontSize: '1.7rem', marginBottom: '.2rem' }}>
                  {stats['Number of asset downloads']} Downloads
                </h2>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute', // Position relative to the parent div
              bottom: '0', // Attach to the bottom
              right: '0', // Attach to the right
              backgroundColor: '#00a1e4', // Same blue color
              color: 'white', // White text for contrast
              padding: '0.5rem 1rem', // Padding for the text
              borderRadius: '8px 0 0 0', // Rounded top-left corner
              fontSize: '0.9rem', // Slightly smaller text
              fontWeight: '500', // Bold text
            }}
          >
            Since 2021
          </div>
        </div>
      </section>
    </>
  );
}
