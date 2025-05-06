/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundColor: '#13716d', // Set hero background to black
        borderRadius: '16px', // Rounded corners
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow
        padding: '4rem 2rem', // Increase padding for more height
        color: 'white', // Ensure text is readable
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Vertically center content
        justifyContent: 'center', // Space between text and image
        height: '50vh', // Set height to 80% of the viewport
      }}
    >
      <div style={{ flex: '1', textAlign: 'left', maxWidth: '50%' }}>
        <h1
          className="hero__title"
          style={{
            fontFamily: 'Inter, sans-serif', // Modern font
            fontWeight: '700', // Bold text
            fontSize: '3rem', // Larger heading
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.3rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textWrap: 'wrap', // Allow text to wrap
          }}
        >
          {siteConfig.tagline}
        </p>
        <div
          className={styles.buttons}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center', // Align buttons to the left
            alignItems: 'center',
          }}
        >
          {/* First Button */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/download-soda"
            style={{
              backgroundColor: '#13716d', // Green background
              color: 'white', // White text
              border: '2px solid white', // Green border
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease', // Smooth hover effect
            }}
          >
            Download SODA for SPARC
          </Link>
          {/* Second Button */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/organize-and-submit-sparc-datasets-with-soda"
            style={{
              backgroundColor: 'white', // White background
              color: '#04634a', // Green text
              border: '2px solid #04634a', // Green border
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease', // Smooth hover effect
            }}
          >
            View the documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="" description="Documentation for the SODA for SPARC application">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
