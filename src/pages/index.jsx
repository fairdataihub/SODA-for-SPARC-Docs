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
        backgroundColor: 'white', // Set hero background to black
        borderRadius: '16px', // Rounded corners
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow
        padding: '4rem 2rem', // Increase padding for more height
        color: 'black', // Ensure text is readable
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Vertically center content
        justifyContent: 'center', // Space between text and image
        height: '65vh', // Set height to 80% of the viewport
        flexDirection: 'column',
      }}
    >
      {/* Logo */}
      <div
        style={{
          flex: '0 0 auto', // Prevent the logo from growing or shrinking
          marginRight: '2rem', // Space between logo and text
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '30%', // Limit the width of the logo container
        }}
      >
        <img
          src="/img/logo.svg"
          alt="My Site Logo"
          style={{
            maxWidth: '130px', // Limit the image width
            height: 'auto', // Maintain aspect ratio
            flexShrink: '0', // Prevent the image from shrinking
            marginBottom: '2rem', // Space below the image
          }}
        />
      </div>
      <div
        style={{
          flex: '1',
          textAlign: 'left',
          maxWidth: '70%',
        }}
      >
        <h1
          className="hero__title"
          style={{
            fontFamily: 'Inter, sans-serif', // Modern font
            fontWeight: '700', // Bold text
            fontSize: '2.25rem', // Larger heading
            marginBottom: '1rem',
            textAlign: 'center',
            color: 'black',
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.3rem',
            lineHeight: '1.5',
            marginBottom: '1.5rem',
            textWrap: 'wrap', // Allow text to wrap
            color: 'black',
            textAlign: 'center', // Center text
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
            to="/docs/getting-started/organize-and-submit-sparc-datasets-with-soda"
            style={{
              backgroundColor: '#13716d', // Green background
              color: 'white',
              padding: '0.75rem 1.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease', // Smooth hover effect
            }}
          >
            View the documentation
          </Link>

          {/* Second Button */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/download-soda"
            style={{
              backgroundColor: '#333333',
              color: 'white', // White text
              border: '2px solid white', // Green border
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease', // Smooth hover effect
              width: '260px', // Fixed width
            }}
          >
            Download SODA
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
      <main
        style={{
          backgroundImage: 'linear-gradient(135deg, #e6f4ea, #edf7fa)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '2rem 0',
        }}
      >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
