/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
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
            <h1 style={{ fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '1rem' }}>
              SODA is a tool that helps make SPARC datasets Findable, Accessible, Interoperable, and
              Reusable.
            </h1>
          </div>
          <div
            className="col"
            style={{
              display: 'flex', // Use flexbox for horizontal alignment
              alignItems: 'flex-start', // Align items at the top
              gap: '1rem', // Add spacing between the list and the image
              paddingLeft: '1.5rem',
            }}
          >
            {/* Bulleted List */}
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: 0, flex: '1' }}>
              <li style={{ fontWeight: '500', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Rapidly curate your data and metadata according to the SPARC Data Standards.
              </li>
              <li style={{ fontWeight: '500', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Easily upload your curated dataset on the SPARC data platform Pennsieve to make it
                FAIR.
              </li>
              <li style={{ fontWeight: '500', fontSize: '1.1rem' }}>
                SODA provides a user-friendly interface to help you curate your data and metadata
                according to the SPARC Data Standards.
              </li>
            </ul>

            {/* Image */}
            <img
              src="/img/logo.svg"
              alt="My Site Logo"
              style={{
                maxWidth: '150px', // Limit the image width
                height: 'auto', // Maintain aspect ratio
                flexShrink: '0', // Prevent the image from shrinking
              }}
            />
          </div>
          <button
            style={{
              backgroundColor: 'white',
              color: '#059669', // Green text color
              border: '2px solid #059669', // Green border
              borderRadius: '8px', // Rounded corners
              padding: '0.5rem 1rem', // Padding for the button
              fontSize: '1rem', // Font size
              fontWeight: '500', // Slightly bold text
              cursor: 'pointer', // Pointer cursor on hover
              marginTop: '1rem', // Margin on top
              marginLeft: '1rem', // Margin on left
            }}
            type="button"
            onClick={() => window.open('https://sparc.science', '_blank')} // Example link
          >
            Learn more about the SPARC data initative
          </button>
        </div>
      </section>
      {/* New Statistics Section */}
      <section>
        <div
          style={{
            backgroundImage: 'linear-gradient(135deg, #e6f4ea, #edf7fa)',
            padding: '1rem 0',
            textAlign: 'center',
            width: '78%',
            margin: '2rem auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="container">
            <h1 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>SODA&apos;s Overall Impact</h1>
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="col">
                <p style={{ fontWeight: '500', fontSize: '1.4rem' }}>
                  Since we began tracking in 2021
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col col--4"
                style={{ borderRight: '1px solid #d1d5db', paddingRight: '1rem' }}
              >
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>35TB+</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Data curated and shared</p>
              </div>
              <div
                className="col col--4"
                style={{ borderRight: '1px solid #d1d5db', paddingRight: '1rem' }}
              >
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>431k+</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Files curated and shared</p>
              </div>
              <div className="col col--4">
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>XX Datasets</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Published to Sparc.Science</p>
              </div>
            </div>

            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
            >
              <div className="col">
                <p style={{ fontWeight: '500', fontSize: '1.4rem' }}>Since last year</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col col--4"
                style={{ borderRight: '1px solid #d1d5db', paddingRight: '1rem' }}
              >
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>35TB+</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Data curated and shared</p>
              </div>
              <div
                className="col col--4"
                style={{ borderRight: '1px solid #d1d5db', paddingRight: '1rem' }}
              >
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>431k+</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Files curated and shared</p>
              </div>
              <div className="col col--4">
                <h2 style={{ color: '#059669', fontSize: '1.6rem' }}>XX Datasets</h2>
                <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Published to Sparc.Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
