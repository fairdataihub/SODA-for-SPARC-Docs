import React, { useState, useRef } from 'react';
import DownloadURL from './DownloadURL';

const OS_OPTIONS = [
  {
    key: 'windows',
    label: 'Windows',
    icon: 'https://img.icons8.com/color/160/000000/windows-10.png',
  },
  {
    key: 'macos',
    label: 'macOS',
    icon: 'https://img.icons8.com/color/160/000000/mac-os.png',
  },
  {
    key: 'linux',
    label: 'Linux (Ubuntu)',
    icon: 'https://img.icons8.com/color/160/000000/linux.png',
  },
];

export default function DownloadSODA() {
  const [selectedOS, setSelectedOS] = useState(null);
  const osRefs = useRef([]);

  // Keyboard navigation handler
  const handleKeyDown = (e, idx) => {
    if (e.key === 'ArrowRight') {
      const nextIdx = (idx + 1) % OS_OPTIONS.length;
      osRefs.current[nextIdx].focus();
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = (idx - 1 + OS_OPTIONS.length) % OS_OPTIONS.length;
      osRefs.current[prevIdx].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      setSelectedOS(OS_OPTIONS[idx].key);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6rem',
          margin: '3rem 0',
        }}
        role="tablist"
        aria-label="Operating System Tabs"
      >
        {OS_OPTIONS.map((os, idx) => (
          <div
            key={os.key}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              outline: selectedOS === os.key ? '3px solid #1976d2' : 'none',
              borderRadius: 8,
              boxShadow: selectedOS === os.key ? '0 0 0 2px #1976d2' : 'none',
            }}
            tabIndex={0}
            role="tab"
            aria-selected={selectedOS === os.key}
            aria-label={`Select ${os.label}`}
            ref={(el) => (osRefs.current[idx] = el)}
            onClick={() => setSelectedOS(os.key)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            <DownloadURL os={os.key}>
              <img
                src={os.icon}
                alt={os.label}
                style={{ width: 140, height: 140 }}
                draggable={false}
              />
              <div style={{ fontSize: '1.2em', marginTop: '1rem' }}>{os.label}</div>
            </DownloadURL>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9em', marginTop: '1rem' }}>
        OS icons by{' '}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
      </div>

      <hr />

      {!selectedOS && (
        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
          <em>Select your operating system above to view installation instructions.</em>
        </div>
      )}

      {selectedOS === 'windows' && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Windows Installation Instructions</h3>
          <p>
            This application has been developed and tested on both Windows 10 and Windows 11 (may
            work on other versions).
          </p>
          <ol>
            <li>
              Double click on the installer (.exe file), it will start the installation process (if
              there is a permission issue try to right-click and select &quot;Run as
              administrator&quot;).
            </li>
            <li>
              Once the application is installed, you can run the application by either running the
              desktop shortcut, searching for &quot;SODA&quot; on the start menu, or from the
              installation folder.
            </li>
          </ol>
          <p>
            The SODA app can be uninstalled from the Program manager (under Control Panel) like any
            other app on Windows.
          </p>
        </div>
      )}

      {selectedOS === 'macos' && (
        <div style={{ marginTop: '2rem' }}>
          <h3>macOS Installation Instructions</h3>
          <p>
            This application has been developed on macOS Catalina 10.15 and has been tested on both
            macOS Catalina and Big Sur (may work on other versions).
          </p>
          <ol>
            <li>
              Double-click on the installer (.dmg file) and, in the installation window, drag the
              SODA icon into the &quot;Applications&quot; folder.
            </li>
            <li>Open by finding SODA in the Applications folder and double clicking.</li>
          </ol>
          <p>
            To uninstall the SODA app, simply delete it from your computer’s
            &quot;Applications&quot; folder.
          </p>
        </div>
      )}

      {selectedOS === 'linux' && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Ubuntu Installation Instructions</h3>
          <p>
            This application has been developed and tested on Ubuntu 20.04.2 LTS (may work on other
            versions).
          </p>
          <ol>
            <li>Right-click on the downloaded file and go to the permissions tab.</li>
            <li>
              Click <code>Allow executing file as program</code> and make sure it is enabled.
            </li>
            <li>Double click the downloaded SODA app icon and it should open the app.</li>
          </ol>
        </div>
      )}
    </>
  );
}
