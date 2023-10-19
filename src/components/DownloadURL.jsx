import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export default function DownloadURL({ children, os }) {
  const [downloadURL, setDownloadURL] = useState(
    'https://github.com/fairdataihub/SODA-for-SPARC/releases',
  );

  const getLatestVersion = async () => {
    // Get latest release from GitHub API
    try {
      const res = await fetch(
        'https://api.github.com/repos/fairdataihub/SODA-for-SPARC/releases/latest',
      );

      const latestRelease = await res.json();

      latestRelease.assets.forEach((asset) => {
        const fileName = asset.name;
        const fileExt = fileName.split('.').pop();

        if (fileExt === 'dmg' && os === 'macos') {
          setDownloadURL(asset.browser_download_url);
        }
        if (fileExt === 'exe' && os === 'windows') {
          setDownloadURL(asset.browser_download_url);
        }
        if (fileExt === 'AppImage' && os === 'linux') {
          setDownloadURL(asset.browser_download_url);
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    getLatestVersion();
  }, [os]);

  return (
    <a href={downloadURL} rel="noopener">
      {children}
    </a>
  );
}

DownloadURL.propTypes = {
  os: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
